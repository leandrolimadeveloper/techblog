<h1 align="center">
    <img alt="TechBlog" width="200px" height="200px" src="https://user-images.githubusercontent.com/76854209/147364208-ce183385-0356-4b44-a81a-ddd739b1e949.png" />
    <br>
    TechBlog
    <p align="center">Your Tech Blog</p>

</h1>

<p align="center">
    <a href="#about">About |</a>
    <a href="#technologies">Technologies |</a>
    <a href="#features">Features |</a>
    <a href="#installation">Installation |</a>
    <a href="#usage">Usage</a>
</p>

<hr>

## About
<p>A Blog with creation of category, user, and admin panel.</p>

![1](https://user-images.githubusercontent.com/76854209/147368662-cf7d6822-19b3-417d-80d5-198a0b854b97.png)
![2](https://user-images.githubusercontent.com/76854209/147368663-798a5fad-2be8-49cb-8a91-8bb8b26e934c.png)
![3](https://user-images.githubusercontent.com/76854209/147368665-2bfab29b-d0b6-4ea1-a318-d719f3141fd4.png)
![4](https://user-images.githubusercontent.com/76854209/147368666-6f621a69-7c47-4112-b61a-36d6015578a7.png)
![5](https://user-images.githubusercontent.com/76854209/147368667-e4e4d608-51bd-47cb-9035-aa03ea4a7e94.png)


<hr>

## Technologies
<ul>
    <li><a href="https://www.w3schools.com" alt="HTML">HTML</a></li>
    <li><a href="https://www.w3schools.com" alt="CSS">CSS</a></li>
    <li><a href="https://getbootstrap.com" alt="Bootstrap">Bootstrap</a></li>
    <li><a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" alt="JavaScript">JavaScript</a></li>
    <li><a href="https://ejs.co/" alt="EJS">EJS</a></li>
    <li><a href="https://nodejs.org/" alt="Node.js">Node.js</a></li>
    <li><a href="https://www.mysql.com" alt="MySQL">MySQL</a></li>
    <li><a href="https://sequelize.org/" alt="Sequelize">Sequelize</a></li>
</ul>

<hr>

## Features
- [x] To create, access, edit and delete a category
- [x] To create, access, edit and delete an article
- [x] To create, access, edit and delete an user
- [x] Authentication for admin user 

<hr>

## Installation

> This guide assumes you already have Node.js, npm and MySQL server installed.

```bash

$ git clone https://github.com/leandrolimadeveloper/techblog.git 
$ cd techblog
$ npm i

```

### Configuring database file
Open the file 'database.js', stored in database folder, and set in the line 2, after 'root', your MySQL server password.

```bash
const connection = new Sequelize('techblog', 'root', '', { ...
```

### Creating database 

```bash
$ mysql -u -root -p 

# Insert the password of your MySQL server (if there is) and type the following commands:
> CREATE DATABASE techblog; 
> USE techblog;
> exit
```

<hr>

## Usage

After creating the database, type the command for executing the application:

```bash

$ npx nodemon index.js

```

<p>Access the address <code>localhost:8080</code> in any browser.</p><br>

### Admin user credentials
email: administradortechblog@tech-b.com<br>
password: 123

To access login page: <code>localhost:8080/login</code><br>
To access admin panel page: <code>localhost:8080/admin</code>

<br>

### Database 
Dump file is available on the folder 'database/sql'.

<hr>

## License
<p>Distributed under the <a href="https://mit-license.org">MIT License</a>.</p>
