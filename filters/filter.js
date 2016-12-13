module.exports = function (req, res, next) {
    console.log('请求之前...');
    // 请求通过，直接调用next();即可
    next();
};