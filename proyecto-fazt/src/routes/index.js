const express = require('express');
const router = express.Router();

router.get('/proyecto-fazt', (req, res) => {
    res.render('index', {title: "Pagina web"});
});

router.get('/proyecto-fazt/almacen', (req, res) => {
    res.render('almacen', {title: "Almacenes"});
});

module.exports = router;