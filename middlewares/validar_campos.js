const { response, request } = require('express');
const { validationResult } = require('express-validator');

const validarCAMPOS = (req = request, res = response, next) => {

    const hasErrors = validationResult(req);

    if (!hasErrors.isEmpty()) {
        return res.status(400).json(
            hasErrors
        );
    }
    next();
}

module.exports = {
    validarCAMPOS
}