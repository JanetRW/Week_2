"use strict";
// //////////////////////////////////Reto 1: Clase Person
// 1. Para los retos de hoy trabajaremos, en el repositorio “Week_2”, creado ayer, desde la
// rama “dia2”. Se creará una nueva carpeta llamada “Typescript” y los ficheros .js se
// deben incorporar al .gitignore.
// 2. Crear la Clase Person con la siguiente estructura:
// • Atributos Públicos:
// - name: string
// - age: number
// • Atributos Privados:
// - address: string
// • Constructor para todos los atributos
// • Metodos Públicos:
// - printName(). Imprime por consola el nombre
// - yearOfBirth(currentYear: number):number. Calcula y devuelve el año de nacimiento
// - setAddress(address:string). Modifica el atributo address con el valor pasado como
// parámetro.
// - getAddress():string. Devuelve el valor del atributo addess.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
//////////////////////////////Reto 2: Probar la Clase Person/////////
// 1. Guardar la clase Person en un fichero con extensión .ts (person.ts).
// 2. Modificar ese fichero para exportar la clase.
// - export class Person
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //métodos:
    // public printName():string{
    //     return this.name;
    // }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    return Person;
}());
exports.Person = Person;
