const express = require('express')
const router = express.Router()

router.get('/categories', (req, res) => {
    res.send('Rota de Categorias')
})

router.get('/categories/node', (req, res) => {
    res.send('Rota de categoria Node')
})

module.exports = router