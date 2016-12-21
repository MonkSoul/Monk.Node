var fs = require('fs');
var path = require('path');

module.exports = {
    // set route directory
    setRouteDirectory: function (routeConfig) {
        this.areaDirectory = routeConfig.areaDirectory;
        this.controllerDirname = routeConfig.controllerDirname;
        this.defaultArea = routeConfig.defaultArea.toLowerCase();
        this.defautController = routeConfig.defautController.toLowerCase();
        this.defautAction = routeConfig.defautAction.toLowerCase();
        this.pathParams = {};
        this.pathFunctions = {};
        this.pathMiddlewares = {};
        return this;
    },

    bind: function (app, cb) {
        var self = this;

        // get all areas
        fs.readdir(self.areaDirectory, function (err, areas) {
            if (err) {
                if (cb) cb(err);
                return;
            }
            // foreach all areas
            areas.forEach(function (area) {

                fs.readdir(path.join(self.areaDirectory, "/", area, "/", self.controllerDirname), function (err, list) {
                    if (err) {
                        if (cb) cb(err);
                        return;
                    }
                    list.forEach(function (file) {
                        var fileName = path.join(self.areaDirectory, "/", area, "/", self.controllerDirname) + '/' + file;
                        if (fileName.indexOf('Controller') == -1 ||
                            !self.isFileModule(file))
                            return;
                        var controller = require(fileName);
                        var aliases = controller['aliases'] || [];
                        delete controller['aliases'];
                        aliases.push((self.translateFileNameToControllerName(file)).toLowerCase());

                        var paths = [];

                        for (var key in controller) {
                            //The function in the controller
                            var f = controller[key];
                            var middlewareFunctions = undefined;

                            //Array of route middleware support
                            if (Array.isArray(f)) {
                                if (f.length == 1) {
                                    f = f[0];
                                }
                                else if (f.length > 1) {
                                    var controllerFunction = f.pop();
                                    middlewareFunctions = f;
                                    f = controllerFunction;
                                }
                                else {
                                    throw new Error('No controller function defined');
                                }
                            }

                            //The parameters in the controller-function
                            var params = self.translateFunctionBodyToParameterArray(f);

                            aliases.forEach(function (alias) {
                                //The generated path (method and url)
                                var path = self.translatePath(area, key, alias, params);
                                //Does this function translate to a valid path for routing?
                                if (path !== false) {

                                    self.pathMiddlewares[path.method + path.path] = middlewareFunctions;
                                    var pathObj = { path: path, params: params, f: f };
                                    paths.push(pathObj);

                                    paths = self.addDefaultRoute(path, area, key, alias, params, paths, middlewareFunctions, f);
                                }
                            });
                        }
                        paths.sort(function (a, b) {
                            return b.path.path.localeCompare(a.path.path);
                        });

                        paths.forEach(function (pathObj) {
                            //Binds the route in the app to the method
                            self.bindFunction(app, pathObj.path, pathObj.params, pathObj.f);
                        })
                    });
                    if (cb) {
                        cb();
                    }
                });
            });
        });
    },
    bindFunction: function (app, path, params, f) {

        var self = this;

        var pathKey = path.method.toLowerCase() + path.path;

        self.pathParams[pathKey] = params;
        self.pathFunctions[pathKey] = f;

        if (self.pathMiddlewares[pathKey] && Array.isArray(self.pathMiddlewares[pathKey])) {

            app[path.method.toLowerCase()](
                path.path,
                self.pathMiddlewares[pathKey],
                function (req, res) {
                    var reqKey = req.method.toLowerCase() + req.route.path;
                    if (!self.pathParams[reqKey]) reqKey = 'get' + req.route.path;
                    var clonedParams = self.pathParams[reqKey].slice(0);
                    clonedParams = self.translateKeysArrayToValuesArray(clonedParams, req.params);
                    clonedParams.unshift(req, res);
                    self.pathFunctions[reqKey].apply(self, clonedParams);
                }
            );

        }
        else {

            app[path.method.toLowerCase()](
                path.path,
                function (req, res) {
                    var reqKey = req.method.toLowerCase() + req.route.path;
                    if (!self.pathParams[reqKey]) reqKey = 'get' + req.route.path;
                    var clonedParams = self.pathParams[reqKey].slice(0);
                    clonedParams = self.translateKeysArrayToValuesArray(clonedParams, req.params);
                    clonedParams.unshift(req, res);
                    self.pathFunctions[reqKey].apply(self, clonedParams);
                }
            );

        }

    },

    addDefaultRoute: function (path, area, key, alias, params, paths, middlewareFunctions, f) {
        var self = this;

        var defaultPath = "";
        // set default route
        if ((alias == self.defautController)) {
            if (key.toLowerCase() == "get_" + self.defautAction) {
                if (area == self.defaultArea) {
                    defaultPath = "/";
                    self.pathMiddlewares[path.method + defaultPath] = middlewareFunctions;
                    paths.push({ path: { path: defaultPath, method: path.method }, params: params, f: f });
                }

                defaultPath = "/" + area;
                self.pathMiddlewares[path.method + defaultPath] = middlewareFunctions;
                paths.push({ path: { path: defaultPath, method: path.method }, params: params, f: f });


                defaultPath = "/" + area + "/" + alias;
                self.pathMiddlewares[path.method + defaultPath] = middlewareFunctions;
                paths.push({ path: { path: defaultPath, method: path.method }, params: params, f: f });
            }
        }
        else {
            if (key.toLowerCase() == "get_" + self.defautAction) {
                defaultPath = "/" + area + "/" + alias;

                self.pathMiddlewares[path.method + defaultPath] = middlewareFunctions;
                paths.push({ path: { path: defaultPath, method: path.method }, params: params, f: f });
            }
        }

        return paths;
    },

    translateKeysArrayToValuesArray: function (keysArray, keyValueObject) {
        var valuesArray = [];
        for (var i = 0; i < keysArray.length; i++) {
            valuesArray.push(keyValueObject[keysArray[i]]);
        }
        return valuesArray;
    },

    translateFunctionBodyToParameterArray: function (f) {
        if (typeof f == 'function') {
            var params = f.toString()
                .replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s))/mg, '')
                .match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
                .split(/,/)

            if (params.length >= 2) {
                params.splice(0, 2);
                return params;
            }
            else {
                throw new Error('Defined controller function has too few parameters');
            }
        }
        else {
            throw new Error('Defined controller object is not a function');
        }

    },

    translateFileNameToControllerName: function (fileName) {
        return fileName
            .slice(0,
            //Get everything before the last dot
            fileName.lastIndexOf('.'))
            .replace('Controller', '');
    },

    translatePath: function (areaName, methodName, controllerName, parameters) {
        var self = this;

        //Ensure that both strings are lower-case
        controllerName = controllerName.toLowerCase();
        parameters = parameters || [];

        var parts = methodName.split('_');

        //Extract the method from parts
        var method = parts[0].toLowerCase();

        // Return false if this request method is not valid
        // or if the action name is missing
        if (['get', 'post', 'put', 'delete', 'patch'].indexOf(method) == -1) return false;
        if (parts.length < 1) return false;

        //Remove method from parts
        parts.splice(0, 1);

        var path = '/' + areaName + '/';

        //Append controller-name to path, if different from 'home'
        //if (controllerName != self.defautController)
        path += controllerName;

        //Append the rest of the parts
        parts.forEach(function (part) {
            //if (part != self.defautAction) {
            var separator = !!~parameters.indexOf(part) ? '/:' : '/';
            if (separator == '/') {
                //Replaces the camelCased section with a hyphenated lowercase string
                part = part.replace(/([A-Z])/g, '-$1').toLowerCase();
            }
            path += separator + part;
            //}
        });

        parameters.forEach(function (parameter) {
            if (!~parts.indexOf(parameter))
                path += "/:" + parameter;
        });

        return {
            path: path,
            method: method
        }
    },

    isFileModule: function (file) {
        var ext = path.extname(file);

        if (path.basename(file, ext)[0] === '.') {
            return false;
        }

        if (ext !== '' && !this.isValidExtension(ext)) {
            return false;
        }

        return true;
    },

    isValidExtension: function (ext) {
        var keys = Object.keys(require.extensions);
        return keys.indexOf(ext) !== -1;
    }
};
