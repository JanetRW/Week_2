"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Reto 5: Probar la Clase Book
//3. Importar la clase en otro fichero denominado bookTest.ts.
//- import { Book } from "./book”
//4. Crear un Objeto de la clase Book y probar todos sus atributos y métodos.
var book_1 = require("./book");
//Crear un objeto de la clase Book, tomamos el ejemplo que nos dan
var book1 = new book_1.Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
console.log(book1.toString());
