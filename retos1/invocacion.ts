/////////////////////////////////////// Reto de Invocación
// Guardar este reto en un nuevo fichero. Ej: invocacion.ts
// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
// par o impar la suma de los caracteres de cada uno de los siguientes arrays:
// • [“Casa”, “Coche”, “Ciudad”, “Cesta”]
// • [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
// • [“Venezuela”, “Veneno”, “Voltaje”]
// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.
// También tendrás que importar dichos ficheros en el fichero actual.
// Subir los cambios a GitHub. Y hacer merge con la rama principal.
console.log("----------------------------Reto de Invocación-----------------------")
import { isEven } from "./condicionales"
import { add } from "./buclesFor"

  let array1=["Casa", "Coche", "Ciudad", "Cesta"];
  let array2=["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
  let array3=["Venezuela", "Veneno", "Voltaje"];

  function verificarSuma(array: string[]): void {
    let sumaCaracts = add(array);
    isEven(sumaCaracts);
  }

  console.log("Array 1:");
  verificarSuma(array1);//es 20 muestra: es par
  console.log("Array 2:");
  verificarSuma(array2);//37 muestra:es impar
  console.log("Array 3:");
  verificarSuma(array3);//22 muestra : es par



