console.log("Hola Mundo");

alert("ERROR 404");

let variableUno=("Hola")
let variableDos=("pipipipipi ")

console.log(variableUno + " " + variableDos);

alert(variableUno + " " + variableDos);

const constante = 10;

let numeroUno = 50;
let numeroDos = 20;

let result = numeroUno + numeroDos
console.log("La suma de dos numeros es:" + result);

var numeroNormal  = prompt("Ingrese un numero");
var numeroAnormal  = prompt("Ingrese un numero");

let resultado = numeroNormal + numeroAnormal

document.write("Numero 1: " + numeroNormal+ "<br>");
document.write("Numero 2: " + numeroAnormal+ "<br>");

let var1 = 10;
let var2 = "10";

if (var1 == var2){
    console.log("Son iguales");
}
else{
    console.log("No son iguales");
}

if (var1 > var2){
    console.log("Es mayor");
}
else{
    console.log("Es menor");
}

if (var1 > var2 && var1 > 15){
    console.log("Es mayor");
}
else{
    console.log("Es menor");
}

if (var1 > var2 || var1 > 5){
    console.log("Es mayor 2.0");
}
else{
    console.log("Es menor 2.0");
}

if (var1 < var2){
    console.log("Es menor var1");
}
else if (var1 > 20){
    console.log("Es mayor a 20");
}
else{
    console.log("No se cumplio");
}


function miFuncion(nomUser){
    console.log("Mi primera funcion", nomUser );
}

miFuncion();

// 1 = true ---- 0 = false
let condicional = true;

if (condicional == 0){
    console.log("Es verdadera");
}else{
    console.log("Es flso");
}
// == compara el valor
// === compara valor y tipo de dato
// !== compara que no son iguales los valores
// !=== compara que no son iguales los valores y el tipo de dato
// && es como un "and" es para que cumpla ambas condiciones
// || es como un "or" es una o la otra 


//comentario de una linea

/* comentario de varias lineas */