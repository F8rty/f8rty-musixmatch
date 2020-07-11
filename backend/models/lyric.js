module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Lyric', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true
		},
		song_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		timestamp: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		lyric: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'Lyrics'
	});
};
