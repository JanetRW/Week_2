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

//////////////////////////////////////Reto 5: Probar la Clase Book
//1. Guardar la clase Book en un fichero con extensión .ts (book.ts).
//2. Modificar ese fichero para exportar la clase.
//- export class Book

export class Book{

    private title : string; 
    private nPages : number;
    private isbn: string;
    private author: string;
    private editorial: string;    
    constructor(title:string,nPages:number,isbn:string,author:string,editorial:string){
        this.title = title;
        this.nPages = nPages;
        this.isbn =  isbn;
        this.author = author;
        this.editorial =editorial;
     
    }
    //Métodos Getters and Setters
        public getTitle(): string {
         return this.title;
        }

        public getNPages(): number {
        return this.nPages;
        }

        public getISBN(): string {
        return this.isbn;
        }

        public getAuthor(): string {
        return this.author;
        }

        public getEditorial(): string {
            return this.editorial;
        }
        
        // Setters
        public setTitle(title: string): void {
            this.title = title;
        }
        
        public setNPages(nPages: number): void {
            this.nPages = nPages;
        }
        
        public setISBN(isbn: string): void {
            this.isbn = isbn;
        }
        public setAuthor(author: string): void {
            this.author = author;
          }
        
        public setEditorial(editorial: string): void {
            this.editorial = editorial;
          }
        
          // Método toString
        public toString(): string {
            return (
              `Title - ${this.title}\n` +
              `Number of Pages - ${this.nPages}\n` +
              `ISBN - ${this.isbn}\n` +
              `Author - ${this.author}\n` +
              `Editorial - ${this.editorial}`
            );
          }
        }