const express = require('express')
const router = express.Router()

router.get('/categories', (req, res) => {
    res.send('Rota de Arigos')
})

router.get('/articles/node', (req, res) => {
    res.send('Rota de artigos Node')
})

module.exports = router