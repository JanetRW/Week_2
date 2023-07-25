// Retos de Bucles While
// 1. Guardar estos retos en un nuevo fichero. Ej: buclesWhile.ts
// 2. Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)
console.log("---------------------------Retos Bucles While------------------------------");
console.log("-----------------------------Ejercicio 2-----------------------------------");
function hasEven(myNums) {
    // Recorremos el array de números
    for (var _i = 0, myNums_1 = myNums; _i < myNums_1.length; _i++) {
        var numero = myNums_1[_i];
        if (numero % 2 === 0) {
            return true;
        }
    }
    return false;
}
//main
var nums = [1, 2, 5, 9, 11, 13];
console.log(hasEven(nums)); // Salida: true (porque el 10 es par)
// 3. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)
// 4. Subir los cambios a GitHub.
