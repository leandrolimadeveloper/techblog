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

app.use('/', categoriesController)
app.use('/', articleController)

app.get('/', (req, res) => {
    Article.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(articles => {
        res.render('index', {articles: articles})
    })
})

app.get('/:slug', (req, res) => {
    let slug = req.params.slug
    
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined) {
            res.render('articles', {article: article} )
        } else {
            res.redirect('/')
        }
    }).catch(err => {
        res.redirect('/')
    })
})

app.listen(8080, () => {
    console.log('O servidor está rodando.')
})
