"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Continuación del Reto 3
//4. Probar la clase contacts en un fichero denominado contactsTest.ts
var contacts_1 = require("./contacts");
var person_1 = require("./person");
var contacts1 = new contacts_1.contacts();
contacts1.people.push(new person_1.Person("Janet", 33, "calle Eduardo Lozano García"));
contacts1.printCalendar();
