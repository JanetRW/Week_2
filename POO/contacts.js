/////////////////////////////////// Reto 7
// • Crear una clase que se llame Contacts que tenga un atributo que sea un array de objetos
// de la clase Person. No olvides seguir trabajando desde tu rama ”dia1”.
// • El constructor de la clase Contacts no debe tener parámetros de entrada pero debe
// inicializar el array.
// • Crear un método llamado printPersons que imprima cada uno de los atributos de cada
// objeto Person.
///////////////////////////////////////Reto 8/////////////////////////////////////////
// • Guardar la clase Contacts en un fichero con extensión .js (contacts.js).

console.log("---------------------------RETO 8-----------------------------------")
let {Person} = require("./person");
class Contacts {
    constructor() {
      this.miArrayPersona = [];
    }
    
    printPersons() {
      this.miArrayPersona.forEach(person => {
        console.log("Persona de Contacto:");
        person.printAll();
        console.log("-------------------");
      });
    }
  }
  module.exports=Contacts;