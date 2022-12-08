const Usuario = require("../models/usuario.models");
const Pasajero = require("../models/pasajero.models");
const Transaccion = require("../models/transaccion.models");
const Vuelo = require("../models/vuelo.models");

const validate_sexo = async (sexo = '') => {
    if (sexo !== "M" && sexo !== "F") {
        throw new Error(`Inserte un dato válido para sexo 'M','F'`)
    }
}

const validateByIdUsuario = async (id_usuario = '') => {
    // validar si existe un usuaro con el Id
    const existe = await Usuario.findByPk(id_usuario);

    if (!existe) {
        throw new Error(`No existe un usuario con el id: ${id_usuario}`)
    }
}


const validateByIdPasajero = async (id_pasajero = '') => {
    // validar si existe un usuaro con el Id
    const existe = await Pasajero.findByPk(id_pasajero);
    if (!existe) {
        throw new Error(`No existe un pasajero con el id: ${id_pasajero}`)
    }
}

const validateByIdVuelo = async (id_vuelo = '') => {
    // validar si existe un usuaro con el Id
    const existe = await Vuelo.findByPk(id_vuelo);

    if (!existe) {
        throw new Error(`No existe un vuelo con el id: ${id_vuelo}`)
    }
}

const validateByIdTransaccion = async (id_transaccion = '') => {
    // validar si existe un usuaro con el Id
    const existe = await Transaccion.findByPk(id_transaccion);

    if (!existe) {
        throw new Error(`No existe una transaccion con el id: ${id_transaccion}`)
    }
}


module.exports = {
    validate_sexo,
    validateByIdUsuario,
    validateByIdPasajero,
    validateByIdVuelo,
    validateByIdTransaccion
}