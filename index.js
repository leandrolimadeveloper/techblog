const express = require('express')
const app = express()
const connection = require('./database/database')

const categoriesController = require('./categories/CategoriesController')
const articleController = require('./articles/ArticlesController')

const Article = require('./articles/Article')
const Category = require('./categories/Category')

// View Engine
app.set('view engine', 'ejs')

// Static
app.use(express.static('public'))

// Body-Parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso!')
    }).catch((error) => {
        console.log(error)
    })

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/', categoriesController)

app.listen(8080, () => {
    console.log('O servidor está rodando.')
})
