"use strict";
// ///////////////////////////Reto 1: Creación de la Clase con Typescript
// 1. Trabajar en la rama repaso2, crear una nueva carpeta denominada mobileProject y
// crear el fichero mobile.ts. Dicho fichero debe contener la clase Mobile con los siguientes
// atributos privados:
// • name: string
// • trademark: string
// • model: string
// • color: string
// • price: number
// 2. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// 3. Crear los métodos setters y getters para todos los atributos de la clase.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    //métodos Getters
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    //Setter
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    // //Reto 2: Añadir Nuevo Método
    // 1. Crear un nuevo método que imprima por consola todas las características de la clase
    // siguiendo el siguiente patrón:
    // “The characteristics of the mobile name are:”
    // • Name: name
    // • Trademark: tradeMark
    // • model: model
    // • Color: color
    // • Price: price
    Mobile.prototype.printCaracteristicas = function () {
        console.log("---------------------------------------------------------");
        console.log("The characteristics of the mobile ".concat(this.name, " are:"));
        console.log("Name: ".concat(this.name));
        console.log("Trademark: ".concat(this.trademark));
        console.log("Model: ".concat(this.model));
        console.log("Color: ".concat(this.color));
        console.log("Price: ".concat(this.price));
    };
    return Mobile;
}());
exports.Mobile = Mobile;
