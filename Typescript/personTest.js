"use strict";
//////////////////////////////Reto 2: Probar la Clase Person/////////
// 3. Importar la clase en otro fichero denominado personTest.ts.
// - import { Person } from "./person”
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
// 4. Crear un Objeto de la clase Person y probar todos sus atributos y métodos.
var myPerson1 = new person_1.Person("Janet", 33, "Calle Eduardo Lozano García");
myPerson1.printName();
console.log(myPerson1.yearOfBirth(2023));
console.log(myPerson1.getAddress()); //muestra Calle Eduardo Lozano García
myPerson1.setAddress("Calle Belvis de Monroy");
console.log(myPerson1.getAddress()); //cuando vuelvo a mostrar saldrá Calle Belvis de Monroy
