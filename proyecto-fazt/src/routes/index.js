const express = require('express');
const router = express.Router();

router.get('/proyecto-fazt', (req, res) => {
    res.render('index', {title: "Pagina web"});
});

module.exports = router;