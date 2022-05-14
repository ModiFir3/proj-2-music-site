const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Spotify extends Model { }

Spotify.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        display_name: {
            type: DataTypes.STRING,
            allowNullL: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        spotify_URL: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'spotify'
    }
);

module.exports = Spotify;