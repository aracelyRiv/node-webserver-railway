/*const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Home Page')
})

app.get('/hola-mundo', function (req, res) {
    res.send('Hola Mundo en su respectiva ruta')
  })

  app.get('*', function (req, res) {
    res.send('404 | Page not found')
  })

app.listen(8080)
*/
/*
const express = require('express')
const app = express()
const port = 8080;

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
  })

  app.get('*', (req, res)=> {
    res.send('404 | Page not found')
  })

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)

})

*/
//Parte 6
/*
const express = require('express')
const app = express()
const port = 8080;
app.set('view engine', 'hbs'); // para usar el handlebars para express
//para servir contenido estatico
app.use(express.static('public'));//deinicion de midelware express. si public esta en otro sitio especificar path

  app.get('/', (req,res) => {
    res.render('home');
  })
  
  app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
  });

  app.get('/elemment', (req, res) => {
    res.sendFile(__dirname + '/public/element.html')
  });

  app.get('*', (req, res)=> {
    res.sendFile(__dirname+'/public/404.html');
  })

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)

})

*/
//Parte 7
/*
const express = require('express')
const app = express()
const port = 8080;
app.set('view engine', 'hbs'); // para usar el handlebars para express
//para servir contenido estatico
app.use(express.static('public'));//deinicion de midelware express. si public esta en otro sitio especificar path

  app.get('/', (req,res) => {
    res.render('home', { // estos son los argumentos
      nombre: 'Aracely Rivera',
      titulo: 'Curso de Node'
    });
  })

  app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
  });

  app.get('/elemment', (req, res) => {
    res.sendFile(__dirname + '/public/element.html')
  });

  app.get('*', (req, res)=> {
    res.sendFile(__dirname+'/public/404.html');
  })

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)

})
*/
//Parte 8
/*
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = 8080;
app.set('view engine', 'hbs'); // para usar el handlebars para express
hbs.registerPartials(__dirname + '/views/partials'); 

//para servir contenido estatico
app.use(express.static('public'));//deinicion de midelware express. si public esta en otro sitio especificar path

  app.get('/', (req,res) => {
    res.render('home', { // estos son los argumentos
      nombre: 'Aracely Rivera',
      titulo: 'Curso de Node'
    });
  })

  app.get('/elements', (req, res) => {
    res.render('elements', {
      nombre: 'Aracely Rivera',
      titulo: 'Curso de Node'
    })
  });

  app.get('/generic', (req, res) => {
    res.render('generic', {
      nombre: 'Aracely Rivera',
      titulo: 'Curso de Node'
    })
  });

  app.get('*', (req, res)=> {
    res.sendFile(__dirname +'/public/404.html');
  })

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})
*/
//Parte 9
const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;
app.set('view engine', 'hbs'); // para usar el handlebars para express
hbs.registerPartials(__dirname + '/views/partials'); 

//para servir contenido estatico
app.use(express.static('public'));//deinicion de midelware express. si public esta en otro sitio especificar path

  app.get('/', (req,res) => {
    res.render('home', { // estos son los argumentos
      nombre: 'Aracely Rivera',
      titulo: 'Curso de Node'
    });
  })

  app.get('/elements', (req, res) => {
    res.render('elements', {
      nombre: 'Aracely Rivera',
      titulo: 'Curso de Node'
    })
  });

  app.get('/generic', (req, res) => {
    res.render('generic', {
      nombre: 'Aracely Rivera',
      titulo: 'Curso de Node'
    })
  });

  app.get('*', (req, res)=> {
    res.sendFile(__dirname +'/public/404.html');
  })

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})
