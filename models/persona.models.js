const Sequelize = require('sequelize');
const db = require('../database/postgres');

const Persona = db.define('persona', {
    uid: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        require: [true, 'El color es requerido']
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        require: [true, 'El nombre es requerido']
    },
    genero: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        unique: false,
        require: [true, 'El género es requerido']
    },
    like: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        unique: false,
        require: [true, 'El like es requerido']
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        require: [true, 'La ubicacion es requerida']
    },

}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Persona;