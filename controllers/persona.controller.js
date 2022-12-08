const { response, request } = require('express');
const Persona = require('../models/persona.models');
const { v4: uuidv4 } = require('uuid');


const personaGet = async (req = request, res = response) => {
    try {
        const persona = await Persona.findAll();
        res.status(200).json(persona)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const personaGetById = async (req, res) => {
    try {
        const uid = req.params.uid;
        const persona = await Persona.findByPk(uid);
        return res.status(200).json(persona);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const personaPost = async (req = request, res = response) => {
    
    const { nombre, color, genero, like, location } = req.body;

    const data = {
        uid: uuidv4(),
        nombre,
        color,
        genero,
        like,
        location
    };

    const persona = new Persona(data);

    await persona.save();

    res.status(201).json({
        msg: 'La persona ha sido creada'
    });
}

const personaPut = async (req = request, res = response) => {

    //const uid = req.params.uid;
    const { uid, nombre, color, genero, like, location  } = req.body;

    const data = {
        nombre,
        color,
        genero,
        like,
        location
    };

    await Persona.update(data, {
        where: {
          uid
        }
    });

    res.status(200).json({
        msg: 'La persona ha sido actualizada'
    });
}

const personaDelete = async (req, res) => {
    const uid = req.params.uid;
    await Persona.destroy({
        where: {
            uid
        }
    });
    res.status(200).json({
        msg: 'La persona ha sido eliminada'
    });
}




module.exports = {
    personaGet,
    personaPost,
    personaGetById,
    personaPut,
    personaDelete
};