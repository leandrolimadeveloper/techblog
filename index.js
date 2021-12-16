const express = require('express')
const app = express()
const connection = require('./database/database')
const session = require('express-session')

const categoriesController = require('./categories/CategoriesController')
const articleController = require('./articles/ArticlesController')
const usersController = require('./users/UsersController')

const Article = require('./articles/Article')
const Category = require('./categories/Category')
const User = require('./users/User')

// View Engine
app.set('view engine', 'ejs')

// Sessions
app.use(session({
    secret: 'jjkljsai29aksm12m921mklkannj201..', 
    cookie: {maxAge: 30000}
}))  

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
app.use('/', usersController)

app.get('/session', (req, res) => {
    req.session.curso = 'Formação Node.js'
    req.session.ano = 2021
    req.session.email = 'leandro.lima'
    req.session.user = {
        username: 'leandrolima',
        id: 14
    }
    res.send('Sessão gerada')
})

app.get('/leitura-session', (req, res) => {
    res.json({
        curso: req.session.curso,
        ano: req.session.ano,
        email: req.session.email,
        user: req.session.user
    })
})

app.get('/', (req, res) => {
    Article.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 4
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render('index', {articles: articles, categories: categories})
        })
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
            Category.findAll().then(categories => {
                res.render('articles', {article: article, categories: categories})
            })
        } else {
            res.redirect('/')
        }
    }).catch(err => {
        res.redirect('/')
    })
})

app.get('/category/:slug', (req, res) => {
    let slug = req.params.slug
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then(category => {
        if(category != undefined) {
            Category.findAll().then(categories => {
                res.render('index', {articles: category.articles, categories: categories})
            })

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