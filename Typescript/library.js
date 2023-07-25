"use strict";
/////////////////////////////////Reto 6: Clase Library
//Crear la Clase Library con la siguiente estructura:
// • Atributos Privados:
// - books: array of Book
// - address: string
// - manager: string
// • Constructor para todos los atributos.
// • Metodos Públicos:
// - getters y setters para los atributos address y manager.
// - toString (): string.
// Devuelve un string con TODA la información de todos los libros de la biblioteca con la
// siguiente estructura :
// “Book1:
// Title – Introducción a Javascript
// Numer of Pages- 233
// IBN – 2344433-BC23333
// Author – Joseph Smith
// Editorial – Now Editions…….”
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        //this.books = [];
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    //métodos públicos getters
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    //métodos públicos setters
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    //Método toString()
    Library.prototype.toString = function () {
        var resultado = "";
        this.books.forEach(function (book, indice) {
            resultado += "Book".concat(indice + 1, ":\n                \nTitle - ").concat(book.getTitle(), "\n                \nNumber of Pages - ").concat(book.getNPages(), "\n                \nISBN - ").concat(book.getISBN(), "\n                \nAuthor - ").concat(book.getAuthor(), "\n                \nEditorial - ").concat(book.getEditorial(), "\n\n");
        });
        return resultado;
    };
    //otra forma:
    //   public toString(): string {
    //     let resultado = '';
    //     for (const book of this.books) {
    //       resultado += book.toString() + '\n\n';
    //     }
    //     return resultado;
    //   }
    //Reto 6: Clase Library (Cont)
    //- getNumberOfBooks ():number.
    //Devuelve el numero de libros de la biblioteca.
    //- findByAuthor (author:string):Book[].
    //Devuelve los libros cuyo autor coincida con el nombre que se pasa como parámetro
    //del método.
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        return this.books.filter(function (book) { return book.getAuthor() === author; });
    };
    return Library;
}());
exports.Library = Library;
