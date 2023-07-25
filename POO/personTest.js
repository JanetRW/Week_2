////////////////////////////////////////RETO 6//////////////////////////////////////
//Importar la clase en otro fichero denominado personTest.js.
//Sube todos los cambios a tu rama “dia1”.

let Person = require("./person");
//Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
let persona1 = new Person("Janet","Rojas",33,1990,170,72,["cantar", "actuar", "viajar","cocinar"]);
console.log("----------------------------RETO 2--------------------------")
console.log("Su índice de masa corporal es:" +persona1.calcularIMC().toFixed(2));
console.log("----------------------------RETO 3--------------------------")
console.log("Su edad es: "+persona1.calcularEdad(2023)+" años");

console.log("----------------------------RETO 4--------------------------")
persona1.printAll();

console.log("----------------------------RETO 5--------------------------")
persona1.printHobbies();



