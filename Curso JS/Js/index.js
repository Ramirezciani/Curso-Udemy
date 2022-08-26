console.log('Paulo Ramirez')

let miPrimeraVariable = 'Mi primera variable!'
// console.log(miPrimeraVariable); //ESTA SERIA UNA VARIABLE DE STRING 


// RE-ASIGANDO VALOR DE UNA VARIABLE (CONCEPTO DE MUTABILIDAD)
// miPrimeraVariable = 'Change'
// console.log(miPrimeraVariable);

// // Booleans
// let trueBoolean = true
// let falseBoolean = false

// //Numbers

// let miNumero = 0
// let miNumero2 = 12
// let miNumero3 = -23

//console.log(miNumero,miNumero2,miNumero3,trueBoolean,falseBoolean,miPrimeraVariable)

//Undefined 

// //let undef
// console.log(undef);

// //let nulo = null
// console.log(nulo);


//const miPrimerObjeto = {}

const miObjeto = {
    unNumero: 12,
    unString: 'Cadena de caracteres',
    unaCondicion: true,
}

// console.log(miObjeto);


// const miObjeto = {
//     unNumero: 12,
//     unString: 'Cadena de caracteres',
//     unaCondicion: true,
// }

// console.log(miObjeto.unNumero);
const arrVacio = []
// const arr = [1,2,"hola",miObjeto]


arrVacio.push(5)
arrVacio.push(3)
arrVacio.push('Hola')
arrVacio.push(miPrimeraVariable)
console.log(arrVacio);