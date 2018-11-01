

const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers')

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) =>{

	res.render('home',{
		nombre: 'Israel m a perez c'
	});
});

app.get('/about', (req, res) =>{

	res.render('about');
});

/*
Primera configuración de lo que se envia a la salida para mostrar.

app.get('/', function (req, res) {
  //res.send('Hello World');

	let salida = {
			nombre: 'Israel',
			edad: 32,
			url: req.url
		}
  	res.send(salida);
});*/

app.get('/data', function (req, res) {
  res.send('En data ');
});
 
app.listen(port, ()=>{
	console.log(`Escuchando peticiones en el puerto ${port}`);
});