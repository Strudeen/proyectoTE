const { Router } = require('express');

const { check } = require('express-validator');

const { validarCAMPOS } = require('../middlewares/validar_campos');

const { personaGet, personaGetById, personaPost, personaPut, personaDelete } = require('../controllers/persona.controller');

const router = Router();


router.get('/read', personaGet);

router.get('/read/:uid', [
    // check('uid').custom(validateByIdUsuario),
], personaGetById);

router.post('/create', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('color', 'El color es obligatorio').not().isEmpty(),
    check('genero', 'El genero es obligatorio').not().isEmpty(),
    check('like', 'El like es obligatorio').not().isEmpty(),
    check('location', 'El location es obligatorio').not().isEmpty(),
    validarCAMPOS
], personaPost);

router.put('/update/:uid', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('color', 'El color es obligatorio').not().isEmpty(),
    check('genero', 'El genero es obligatorio').not().isEmpty(),
    check('like', 'El like es obligatorio').not().isEmpty(),
    check('location', 'El location es obligatorio').not().isEmpty(),
    validarCAMPOS
], personaPut);

router.delete('/delete/:uid', personaDelete);

module.exports = router