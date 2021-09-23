const faker = require('faker')
faker.locale= 'es'

class Productos{
    crearProductos(cantidad){
        if (cantidad <= 0 ){ return {error:"No hay productos"}}
        let array =[]
        for (let i = 0; i < cantidad; i++) {
            array.push({ nombre: faker.commerce.product(),
                        precio:faker.commerce.price(),
                        foto:faker.image.imageUrl()
            })
        }
    return array
    }
}

module.exports = new Productos