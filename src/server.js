const express = require('express')
const app = express()
const faker = require('faker')
const productos = require('./api/productos')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

faker.locale= 'es'

app.set('views', './views');
app.set('view engine', 'pug');


app.get('/productos/vista-test', (req,res) => {
  let cantidad = req.query.cant || 10
  //if (cantidad <= 0 ){ return {error:"No hay productos"}}
  console.log(cantidad)
  let produ = productos.crearProductos(cantidad)
  console.log(produ.length)
  res.render('vista', {validacion:produ.length, allProductos: produ})

})



const server = app.listen(3000,() => {
  console.log("conectado")
})

server.on('error', error => {
  console.log("error de server")
})