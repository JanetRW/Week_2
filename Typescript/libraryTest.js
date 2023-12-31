"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /////////////////////////////Reto 7: Probar la Clase Library
// 3. Importar la clase en otro fichero denominado libraryTest.ts.
// - import { Library } from "./library”
// 4. Crear un Objeto de la clase Library y probar todos sus atributos y métodos.
// 5. Sube todos los cambios a tu rama “dia2”.
var book_1 = require("./book");
var library_1 = require("./library");
//creo 3 objetos para la clase Book
var book1 = new book_1.Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
var book2 = new book_1.Book("TypeScript: TypeScript para principiantes", 170, "979-8713181239", "John Bach", "Independently published");
var book3 = new book_1.Book("Learning Node: Moving to the Server-Side", 300, "978-1491943120", "Shelley Powers", "O'Reilly Media");
//creo 1 objeto para la clase Library
var library = new library_1.Library([book1, book2, book3], "C/ Gran Vía, 29", "José Manuel Illanes");
//console.log(library);
console.log("Library Information:");
console.log(library.toString());
console.log("Number of books:", library.getNumberOfBooks());
console.log(library.findByAuthor("Shelley Powers"));
//otra forma larga:
// let author = "Shelley Powers";
// let librosporAuthor = library.findByAuthor(author);
// console.log(`Books by ${author}:`);
// console.log(librosporAuthor);
