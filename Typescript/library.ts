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



// /////////////////////////////Reto 7: Probar la Clase Library
// 1. Guardar la clase Library en un fichero con extensión .ts (library.ts).
// 2. Modificar ese fichero para exportar la clase.
// - export class Library
import {Book} from "./book"
export class Library{
    //atributos privados
    private books :Book[];
    private address:string;
    private manager:string;

        constructor(books: Book[],address:string,manager:string){
            //this.books = [];
            this.books=books;
            this.address=address;
            this.manager=manager;
        }
        //métodos públicos getters
        public getAddress():string{
            return this.address;
        }
        public getManager():string{
            return this.manager;
        }
        //métodos públicos setters
        public setAddress(address:string): void {
            this.address = address;
        }
        public setManager(manager:string):void{
            this.manager = manager;
        }
        //Método toString()
        public toString():string{
            let resultado ="";
            this.books.forEach((book,indice)=>{
                resultado +=`Book${indice + 1}:
                \nTitle - ${book.getTitle()}
                \nNumber of Pages - ${book.getNPages()}
                \nISBN - ${book.getISBN()}
                \nAuthor - ${book.getAuthor()}
                \nEditorial - ${book.getEditorial()}\n\n`;   
            }); 
            return resultado; 
          }
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
        public getNumberOfBooks():number{
            return this.books.length;
        }
        public findByAuthor (author:string):Book[]{
            return this.books.filter(book => book.getAuthor() === author);
        }
        
} 