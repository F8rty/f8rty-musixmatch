module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Song', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		artist: {
			type: DataTypes.STRING,
			allowNull: true
		},
		album: {
			type: DataTypes.STRING,
			allowNull: true
		},
		audiosrc: {
			type: DataTypes.STRING,
			allowNull: true
		},
		img: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'Songs'
	});
};
