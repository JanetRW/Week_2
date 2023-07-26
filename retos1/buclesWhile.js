// Retos de Bucles While
// 1. Guardar estos retos en un nuevo fichero. Ej: buclesWhile.ts
// 2. Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)
console.log("---------------------------Retos Bucles While------------------------------");
console.log("-----------------------------Ejercicio 2-----------------------------------");
function hasEven(myNums) {
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            return true;
        }
        i++;
    }
    return false;
}
//main
var nums = [1, 2, 5, 9, 11, 13];
console.log(hasEven(nums)); // Salida: true numero 2 es par
// 3. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)
// 4. Subir los cambios a GitHub.
console.log("-----------------------------Ejercicio 3-----------------------------------");
function startWithM(myNames) {
    var inicio = 0;
    while (inicio < myNames.length) {
        if (myNames[inicio][0] !== 'M') {
            return false;
        }
        inicio++;
    }
    return true;
}
//main
var nombres1 = ['Maro', 'Mauricio', 'Margarita', 'Mariana'];
console.log(startWithM(nombres1));
var nombres2 = ['Marcos', 'Lolo', 'Mario', 'Mercedes'];
console.log(startWithM(nombres2));
