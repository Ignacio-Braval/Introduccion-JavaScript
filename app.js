
/* Funciones en JS
function saludar(nombre){
    console.log(`${'Hello'} ${nombre}`);
}
saludar('Pedro');
saludar('Juan');
saludar('Diego');

function sumar(num1, num2){
    return num1 + num2;
}
resultado = sumar(5, 10);
console.log(resultado);
*/

/* Bucle while y for en JS
// while descendente
let count = 10
while (count > 0 ) {
    console.log(count);
    count = count - 1;
}

// while ascendente
let countNuevo = 0
while (countNuevo <= 10 ) {
    console.log(countNuevo);
    countNuevo = countNuevo + 1;
}
let namesArray = ['ryan', 'joe', 'john']
console.log(namesArray.length);

for (let index = 0; index < namesArray.length; index++){
    console.log(namesArray[index]);
}
*/

/* Condicionales en JS
// Condicional if - else if - else
let passwordDb = 'ejemplo'
let inputUsuario = 'ejemplo1'
let result = inputUsuario == passwordDb;

if (result === true){
    console.log('Login Correcto');
} else {
    console.log('Login Incorrecto');
}


let score = 60
if (score > 30) {
    console.log('Puntaje Promedio');
} else if (score > 15){
    console.log('Estas Mejorando')
} 
else {
    console.log('Necesitas Practicar más')
}

// Condicional switch
let typeCard = 'credito'

switch(typeCard){
    case 'debito':
        console.log('tarjeta de debito');
        break;
    case 'credito':
        console.log('tarjeta de credito');
        break;
    default:
        console.log('No tienes tarjeta');
}
*/

/* Variables en JS
let numberOne = 60;
let numberTwo = 100;

// Suma de dos numeros
let resullt = numberOne + numberTwo
// Comparación si es 60 es mayor a 100
let result2 = numberOne > numberTwo
// Preguntamos si numberOne es diferente a numberTwo
let result3 = numberOne != numberTwo
// Es number One igual que numberTwo
let result4 = numberOne == numberTwo
// Es numberOne menor o igual a number Two
let result5 = numberOne <= numberTwo
console.log(resullt)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)

let firstName = 'John';
let lastName = 'Carter';

// 'f{}' en python para juntar cadenas, acá es `${}`
console.log(`${firstName}  ${lastName}`)
*/

/* Ejemplos Practicos en JS

console.log('Hello World')
console.log(1500)
console.log(true)
console.log(['hola', 'mundo'])
console.log({
    'username': 'ryan',
    'score': 70.4,
    'hours': 14,
    'professional': true,
    'friends': ['jose', 'carlos', 'maria'],
})

// var o let se ocupan para definir variables en JS
// Una variable puede cambiar en el tiempo un const no puede
 var nameuser = 'john';
console.log(nameuser)
let lastname = 'cena';
console.log(lastname)
const PI = 3.1415
console.log(PI)

// camelcase
let userName = 'juan';
*/

/* Tipos de datos en JS
// document.write('<h1>Hello World</h1>');
// Tipos de datos en JS
'Hello World' // string

1500 // number
10.5 

true // boolean
false

['joe', 'ryan', 'martha'] // array
[1, 56, 14]
[true, false, false, true]

// objects
{
    'username': 'ryan',
    'score': 70.4,
    'hours': 14,
    'proffesional': true,
    'friends': ['jose', 'carlos', 'maria'],
}
*/
