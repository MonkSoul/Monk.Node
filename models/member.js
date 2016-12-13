/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('member', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'member',
		timestamps: false,
		freezeTableName: true
	});
};
