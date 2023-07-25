"use strict";
//////////////////////////////////Reto 4: Clase Book
//Crear la Clase Book con la siguiente estructura:
// • Atributos Privados:
// - title: string
// - nPages: number
// - isbn: string
// - author: string
// - editorial: string
// • Constructor para todos los atributos.
// • Metodos Públicos:
// - getters y setters para todos los atributos
// - toString (): string.
// Devuelve un string con TODA la información del libro con la siguiente estructura:
// “Title – Introducción a Javascript
// Numer of Pages - 233
// ISBN – 2344433-BC23333
// Author – Joseph Smith
// Editorial – Now Editions"
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
//////////////////////////////////////Reto 5: Probar la Clase Book
//1. Guardar la clase Book en un fichero con extensión .ts (book.ts).
//2. Modificar ese fichero para exportar la clase.
//- export class Book
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    //Métodos Getters and Setters
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getNPages = function () {
        return this.nPages;
    };
    Book.prototype.getISBN = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    // Setters
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setNPages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.setISBN = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    // Método toString
    Book.prototype.toString = function () {
        return ("Title - ".concat(this.title, "\n") +
            "Number of Pages - ".concat(this.nPages, "\n") +
            "ISBN - ".concat(this.isbn, "\n") +
            "Author - ".concat(this.author, "\n") +
            "Editorial - ".concat(this.editorial));
    };
    return Book;
}());
exports.Book = Book;
