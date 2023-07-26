// /////////////////////////////////Retos de Bucles For
// 1. Guardar estos retos en un nuevo fichero. Ej: buclesFor.ts
// 2. Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)
console.log("-----------------------------Retos Bucles For----------------------------")
console.log("-----------------------------Ejercicio 2----------------------------")
function evenNumbers(num: number): void {
    for (let i = 1; i <= num; i++) {
      if (i % 2 !== 0) {
        console.log("Números impares existentes: "+i);
      }
    }  
  }
   //main
  evenNumbers(8);
  
// 3. Realizar una función que como parámetro de entrada reciba un array y como salida
// devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)
console.log("-----------------------------Ejercicio 3----------------------------")
  function myRevert(myArr:number[]):number[]{
    let arrayRevertido:number[]= [];
     for (let i= myArr.length - 1; i >= 0;i--) {
       arrayRevertido.push(myArr[i]);
     }
     return arrayRevertido;
   }
  //main
  let arrayInicial = [10, 28, 34, 45, 59];
  let arrayRevertido = myRevert(arrayInicial);
  console.log(arrayRevertido); // [59,45,34,28,10]

// 4. Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
console.log("-----------------------------Ejercicio 4----------------------------")
function isRainbow(colors: string[]): void {
  let rainbowColors = ["rojo", "naranja", "amarillo", "verde", "azul", "añil", "violeta"];

  for (let color of colors) {
    let colorArcoIris = false;
    for (let colores of rainbowColors) {
      if (color.toLowerCase() === colores) {
        colorArcoIris = true;
        break;
      }
    }
    if (colorArcoIris) {
      console.log(`${color} está en el arcoíris.`);
    } else {
      console.log(`${color} no está en el arcoíris.`);
    }
  }
}
  // Main
  let arrayColores = ["rojo", "rosa", "malva", "cian", "azul"];
  isRainbow(arrayColores);
  
// 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)
// 6. Subir los cambios a GitHub.
console.log("-----------------------------Ejercicio 5----------------------------")
export function add(myWords: string[]): number {
    let sumatoriaCaracters = 0;
  
    for (let word of myWords) {
      sumatoriaCaracters+= word.length;
    }
     return sumatoriaCaracters;
  }
  
  //main
  let palabrArr = ["retos", "buclesFor", "Javascript","Typescript"];
  let resultado = add(palabrArr);
  console.log(resultado); //34
  