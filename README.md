# Curso-Udemy
Curso Udemy Js, HTML, CSS

<h1>HTML - CSS </h1>

17-08-2022: Menu Nav / Menu DropDown 
18-08-2022: Css Avanzado


Deberia haber tomado apuntes antes (sad)

Grid = grilla ( sistema para distribuir contenido de manera homogenea y ordenada, se puede decir que es un sistema de celda similiar a las plantillas excel,
distribuido en columnas y filas , se puede cambiar la posicion , el ancho y el alto).


Inline-grid = utiliza solo el espacio del elemento mas ancho de la grilla 

altura automatica sin no es especificamos, ya sea con grid-template-rows o grid-template-columns


* se puede utilizar px , fr (fraciones), rem , % 

minmax ( setear valores de minimo en maximo y minino tanto como en columnas y filas )


repeat = indicar cuantas veces repite el argumento 


grid cap para brechas 
primer valor filas 
segundo valor Columnas 

grid column and row con notacion X / X para inicio y fin .



__________________________________________________________________________
//25-08
<h1>JavaScript</h1>

Ejecutar codigo de js -- node nombrearchivo.js

cuando se abre un parentesis, inmediantamente cerrar (buenas practicas)

comentarios en js // al inicio dentro del codigo 
tipos de datos: 
1. String = cadena de caracteres. ejemple 'a' ( se usa comilla simple )
2. Boolean = True ( valor verdadero ) / False (valor falso )
3. Null = Valor nulo (relacion con variables que se encuentran vacias)
4. Number = 1239810293 (sin necesidad de escribir comillas dobles o simple)
 ( "123" = String / 123 = Number )
5. Undefined = (similar a nulo pero Undefined es una variable que no ha sido definida
6. Object = Estructuras para agrupar tipos de datos 


* Variables (definicion de variables)
1. var = (forma antigua de contemplar variables )
2. let 
3. const

example 
--let miPrimeraVariable = 'Mi primera variable!'
console.log(miPrimeraVariable); //ESTA SERIA UNA VARIABLE DE STRING 


-- Concepto de mutabilidad
 Cuando tenemos una variable y le cambiamos el valor ( reasignacion de variables)

-- variable sin palabras reservadas por el momento ( se veran en condiciones)

<b>Variables siempre inician con una letra a - z y asignar nombres coherentes al contexto<b>

--let undef
console.log(undef); -- imprimira en consola undefined (ya que no tiene ningun valor asignado)


--let nulo = null
console.log(nulo); (nulo si es un valor, en consola deberia imprimir null)

<h4>Objetos en JavaScript</h4>


Objeto =  agrupación de datos , estos datos hacen sentido entre si.

<b>const miObjeto = {
    unNumero: 12,
    unString: 'Cadena de caracteres',
    unaCondicion: true,
}<b> Ejemplo 

const miObjeto = {
    unNumero: 12,
    unString: 'Cadena de caracteres',
    unaCondicion: true,
}

console.log(miObjeto.unNumero); para imprimir solo algo del objeto.


<h4>Arrglos en JS</h4>

diferentes tipos de datos 

const arr = [1,2,"hola",miObjeto]
console.log(arr);

(CLS o CLEAR PARA LIMPIAR LA CONSOLA)


const arrVacio = []
// const arr = [1,2,"hola",miObjeto]


arrVacio.push(5)
arrVacio.push(3)
arrVacio.push('Hola')
console.log(arrVacio);

<b>arreglo.push = empujar valores al arreglo (es un metodo).<b>


<h4>Operadores matematicos </h4>

Suma , Resta, Multiplicacion , Division 


const suma = 1 + 2
const resta = 1 -2 
const multi  = 5 * 3
const div  = 9 / 3

console.log(suma,resta,multi,div);

-- Modulo ( divide dos valores y retorna el valor que sobra)
Ejemplo 
const modulo = 10  % 3 
console.log(modulo);

const vs let = const no deja cambiar las variables , pero sin las propiedades

let num = 5 
num++
console.log(num); (num++ sumo uno al valor de la variable)


num-- 
console.log(num); (decremento de una variable)

num += (operado de asignacion en incremento)
num -= (operador de asignacion en decremento)
num *= (multiplicacion)
num /= (division)


Operadores de comparacion( nos permiten hacer comparaciones entre distintos tipos de dato )

const resultado1 = 5 === 6 
console.log(resultado1)

=== nos devuelve un boolean true o false ( === es un operador de comparación y estricto)

const resultado1 = 5 === 6 
const resultado2 = 5 == '5' (comparacion con doble igualdad y nos da el resultado de true) (== no es estricto , string pueden ser iguales a numeros si el valor es el mismo )
console.log(resultado1, resultado2)

Operadores de comparacion menor y mayor


const resultado3 = 5 < 6
const resultado4 = 5 < 5
const resultado5 = 5 > 6
const resultado6 =  6 > 5

console.log(resultado3, resultado4, resultado5, resultado6)


<h4>Operadores Logicos </h4>

Or = || (Evaluar el primer valor que se ha considerado como true , la mayoria de las veces se utiliza para comparar dos valores)
and = && (and busca el primer valor de false )
not = ! (invierte el resultado , niega el valor)

or y and ( short circuit evaluation , evaluan hasta el primer valor que corta la operacion)

String , numeros y objetos evaluan en true 

<h3>Control de Flujo </h3>

iteraciones y evaluar condiciones 

-- if (false){
    console.log('Dentro del if')

}(este console log no deberia ejecutar nada en consola)

else siempre se debe escribir con un if 


-- while = instruccion que se queda iterando hasta el final de los ciclos a menos que le indiquemos lo contrario

ejemplo
let x  = true

while (x ) {
    console.log(x);
    x = false

}


-- Switch = es otro tipo de control de flujo , que nos permite ejecutar una u otra instruccion dependiendo de una variable.


switch ('x'){
    case 1: {
        console.log('Ejemplo 1')
        break;

    }
    case 2:{
        console.log('Ejemplo  2')
        break;

    }
    case 3: 
        console.log('Ejmeplo 3 ')
        break;

    default: 
        console.log('Ejemplo Predeterminado')
        break;
}


Es importante poner los break al terminar el case , sin break salta a la evaluacion siguiente 

-- for = es similar a while  , nos permite iterar o estar dentro de un lopp hasta que se cumpla una condicion.

dentro del paretensis se le indican 3 instrucciones. 
- variable inicial 
- condicion para salir del loop
- el incremento   

for (let i = 0; i < 10; i++ ){
    console.log(i)

}

-- Como accder a arreglos 

los arreglos en js tiene la propiedad length
(-- el largo -1)


const numeros = [1,2,3,4,5]


// console.log(numeros[2]);

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}


ejemplo para acceder a los elementos de un arreglo



<h3>FUNCIONES EN JS</h3>