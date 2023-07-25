// /////////////////////////////////Retos de Bucles For
// 1. Guardar estos retos en un nuevo fichero. Ej: buclesFor.ts
// 2. Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)
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
  function myRevert(myArr) {
    return myArr.reduce((arrayRevertido, elem) => [elem, ...arrayRevertido], []);
  }
  //main
  let arrayInicial = [10, 28, 34, 45, 59];
  let arrayRevertido = myRevert(arrayInicial);
  console.log(arrayRevertido); // [59,45,34,28,10]

//function myRevert(miArray){
    //let arrayRevertido= [];
  //   for (let i= miArray.length - 1; i >= 0;i--) {
  //     arrayRevertido.push(miArray[i]);
  //   }
  //   return arrayRevertido;
  // }

// 4. Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
console.log("-----------------------------Ejercicio 4----------------------------")
function isRainbow(colors: string[]): void {
    //creo un array con los colores del arco iris
    let coloresRainbow = ["rojo", "naranja", "amarillo", "verde", "azul", "índigo", "violeta"];
    
       colors.forEach(color => {
        let indice = coloresRainbow.indexOf(color.toLowerCase());
        if (indice!==-1) {
          console.log(`${color} está en el arcoíris.`);
        } else {
        console.log(`${color} no está en el arcoíris.`);
        }
        });
}
  
  // Ejemplo de uso:
  let arrayColores = ["rojo", "rosa", "malva", "cian", "azul"];
  isRainbow(arrayColores);
  
// 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)
// 6. Subir los cambios a GitHub.
console.log("-----------------------------Ejercicio 5----------------------------")
function add(myWords: string[]): number {
    let sumaCaracteres = 0;
  
    for (let palabra of myWords) {
      sumaCaracteres+= palabra.length;
    }
  
    return sumaCaracteres;
  }
  
  //main
  let palabrArr = ["retos", "buclesFor", "Javascript","Typescript"];
  let resultado = add(palabrArr);
  console.log(resultado); 
  