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

// const miObjeto = {
//     unNumero: 12,
//     unString: 'Cadena de caracteres',
//     unaCondicion: true,
// }

// console.log(miObjeto);


// const miObjeto = {
//     unNumero: 12,
//     unString: 'Cadena de caracteres',
//     unaCondicion: true,
// }

// console.log(miObjeto.unNumero);
// const arrVacio = []
// const arr = [1,2,"hola",miObjeto]


// arrVacio.push(5)
// arrVacio.push(3)
// arrVacio.push('Hola')
// arrVacio.push(miPrimeraVariable)
// console.log(arrVacio);

// const suma = 1 + 2
// const resta = 1 -2 
// const multi  = 5 * 3
// const div  = 9 / 3
// console.log(suma,resta,multi,div);


// const modulo = 10  % 3 
// console.log(modulo);

// let num = 5 
//num++
// num--

// num += 3
// num -= 5

// console.log(num);

//operadores logicos

// const resultado1 = 5 === 6 
// const resultado2 = 5 === '5'
// console.log(resultado1, resultado2)

// const resultado3 = 5 < 6
// const resultado4 = 5 <5
// const resultado5 = 5 > 6
// const resultado6 =  6 > 5
// const resultado7 = 5 <= 5
// const resultado8 = 5 <= 6
// const resultado9 = 5 >= 5
// const resultado10 = 5 >= 6

// const resultado11 = 5 !== 6 
// const resultado12 = 5 != '5' 


// console.log(resultado11,resultado12);

// const resultadoOr = false  || 'hola'
// console.log(resultadoOr);

// const resultadoAnd = true && false
// console.log(resultadoAnd);

// const resultadoNot = !true 
// console.log(resultadoNot);


// const edad = 5 
// if (edad > 5 && edad < 18 ){
//     console.log('Acceso Permitido')

// }else{
//     console.log('Acceso denegado')

// }

// WHILE
// let x  = 0

// while (x < 5 ) {
//     console.log(x);
//     x++

// }

// console.log('terminando el loop')

// let y = 3; 

// switch (y) {
//     case 1: {
//         console.log('Ejemplo 1')
//         break;

//     }
//     case 2:{
//         console.log('Ejemplo  2')
//         break;

//     }
//     case 3: 
//         console.log('Ejmeplo 3 ')
//         break;

//     default: 
//         console.log('Ejemplo Predeterminado')
//         break;
// }

// for (let i = 0; i < 10; i++ ){
//     console.log(i)

// }


<<<<<<< HEAD
// const numeros = [1,2,3,4,5]
=======
// const numeros = [1,2,'hola',4,5]
>>>>>>> fce8401defc5bc72e1e362d97b6027529ebeded1


// // console.log(numeros[2]);

// for (let i = 0; i < numeros.length; i++){
//     console.log(numeros[i]);
// }

<<<<<<< HEAD
// const arrowFunction = (a,b) => a + b 
// const r = arrowFunction(1,2);
// console.log(r);

// const arrowFunction = (a,b) =>{
//     return a + b
// }

// const r = arrowFunction (1,2)

// console.log(r);


function sumar (a,b , cb){
    const r = a + b;
    cb (r)

}

function callback(result){
    console.log('resultado',result);
}
callback(6)

sumar (2,3, function(r){
    console.log('funcion anonima', r)
})
=======
// function iterar (arg1){




//     for (let i = 0; i < arg1.length; i++){
//         console.log(arg1[i]);
// }

// }
// const numeros = [1,2,'hola',4,5]
// const nombres = ['Pedro', 'Juan', 'Felipe','Paulo']
// iterar(numeros)
// iterar(nombres)

// function suma(a, b){
//     return(a + b);

// }

// const resultadosuma = suma(1,2)
// const resultadosuma2 = suma(5,6)
// const resultadosuma3 = suma(resultadosuma,resultadosuma2)
// console.log('Resultado', resultadosuma3);


// function sumar (a, b , cb){
//     const resultado = a + b; 
//     cb(resultado)
// }

// function callback (result){
//     console.log('resultado', result)
// }
// sumar(2, 3, callback)


const miFatArrowFunction = () =~
>>>>>>> fce8401defc5bc72e1e362d97b6027529ebeded1
