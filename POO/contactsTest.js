///////////////////////////////////////////RETO 8///////////////////////////////////////
//• Modificar ese fichero para exportar la clase. Importar la clase en otro fichero denominado
//contactsTest.js.
//• Crear un objeto de la clase Contacts y probar todos sus atributos y métodos.
//• Sube todos los cambios a tu rama “dia1” y después haz ”merge” con tu rama
//“master/main”. En caso de tener conflicto soluciónalos.
//• Haz una versión de esta subida.

let Contacts = require("./contacts");
let Person = require("./person");
// Creo el objeto de la clase Person
let persona1 = new Person("Jaime","Rosas",43, 1980,180,72, "[viajar,cantar,surfear,pasear en bici]");

//creo mi objeto de la clase Contacts
let contacto = new Contacts();

//Agrego los contactos al objeto Contacts
contacto.miArrayPersona.push(persona1);
// muestro los atributos de cada persona en el array de contacts
contacto.printPersons();
