// DB connection
require('./db/0_ddbb-conection')

// Model
const Dog = require('./models/dog.model')





// // .findByIdAndUpdate()
// // Dos argumentos: string con ID, y query de manipulación
// // retorno: el elemento anterior al update
// // El argumento adicional {new: true} hará que retorne el elemento tras el update


// Dog
//     .findByIdAndUpdate('636b7e85c687a2d846abdfc9', { $inc: { age: 100 }, city: 'Oviedo' }, { new: true })
//     .then(dog => console.log("El perro modificado es:", dog))
//     .catch(err => console.log('Hubo un error', err))







// // .updateMany()
// // Dos argumentos: query de búsqueda y query de actualización
// // retorno: objeto con detalles de la operación

// Dog
//     .updateMany({ name: 'Popino the best doggy' }, { age: 80 })
//     .then(details => console.log("Los detalles de la modificación son:", details))
//     .catch(err => console.log('Hubo un error', err))








// .updateOne()
// Dos argumentos: query de búsqueda y query de actualización
// Retorn: objeto con detalles de la operación

Dog
    .updateOne({ name: 'Salchichonio' }, { name: 'Salchichonio reloaded' })
    .then(info => console.log("Los detalles de la modificación son:", info))
    .catch(err => console.log('Hubo un error', err))