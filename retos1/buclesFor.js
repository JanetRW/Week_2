"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
// /////////////////////////////////Retos de Bucles For
// 1. Guardar estos retos en un nuevo fichero. Ej: buclesFor.ts
// 2. Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)
console.log("-----------------------------Retos Bucles For----------------------------");
console.log("-----------------------------Ejercicio 2----------------------------");
function evenNumbers(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log("Números impares existentes: " + i);
        }
    }
}
//main
evenNumbers(8);
// 3. Realizar una función que como parámetro de entrada reciba un array y como salida
// devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)
console.log("-----------------------------Ejercicio 3----------------------------");
function myRevert(myArr) {
    var arrayRevertido = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        arrayRevertido.push(myArr[i]);
    }
    return arrayRevertido;
}
//main
var arrayInicial = [10, 28, 34, 45, 59];
var arrayRevertido = myRevert(arrayInicial);
console.log(arrayRevertido); // [59,45,34,28,10]
// 4. Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
console.log("-----------------------------Ejercicio 4----------------------------");
function isRainbow(colors) {
    var rainbowColors = ["rojo", "naranja", "amarillo", "verde", "azul", "añil", "violeta"];
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        var colorArcoIris = false;
        for (var _a = 0, rainbowColors_1 = rainbowColors; _a < rainbowColors_1.length; _a++) {
            var colores = rainbowColors_1[_a];
            if (color.toLowerCase() === colores) {
                colorArcoIris = true;
                break;
            }
        }
        if (colorArcoIris) {
            console.log("".concat(color, " est\u00E1 en el arco\u00EDris."));
        }
        else {
            console.log("".concat(color, " no est\u00E1 en el arco\u00EDris."));
        }
    }
}
// Main
var arrayColores = ["rojo", "rosa", "malva", "cian", "azul"];
isRainbow(arrayColores);
// 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)
// 6. Subir los cambios a GitHub.
console.log("-----------------------------Ejercicio 5----------------------------");
function add(myWords) {
    var sumatoriaCaracters = 0;
    for (var _i = 0, myWords_1 = myWords; _i < myWords_1.length; _i++) {
        var word = myWords_1[_i];
        sumatoriaCaracters += word.length;
    }
    return sumatoriaCaracters;
}
exports.add = add;
//main
var palabrArr = ["retos", "buclesFor", "Javascript", "Typescript"];
var resultado = add(palabrArr);
console.log(resultado); //34
