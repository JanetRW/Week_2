"use strict";
// //////////////////////////Reto 1: Creación de la Clase con Typescript
// 1. Trabajar en la rama repaso2 dentro de la carpeta creada en el reto anterior crear el fichero
// mobileCollection.ts
// 2. Dicho fichero debe contener la clase MobileCollection con los siguientes atributos privados:
// • mobiles: Mobile[]
// • totalPrice: number
// 3. El constructor debe tener como parámetro de entrada el array de objetos de la clase Mobile.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    // ////////////////////////////////Reto 2: Añadir un Método Privado
    // 1. Crear un método privado denominado totalPriceCalculation sin parámetros de entrada,
    // que te calcule el precio total de la colección.
    // NOTA: Debe realizar la suma de los precios de todos los objetos almacenados en el
    // atributo mobiles.
    // 2. En el constructor llamar totalPriceCalculation y guardarlo en su atributo correspondiente.
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileCollection.prototype.totalPriceCalculation = function () {
        return this.mobiles.reduce(function (total, mobile) { return total + mobile.getPrice(); }, 0);
    };
    // Getters
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    // Setters
    MobileCollection.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    };
    MobileCollection.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    // ///////////////////////////Reto 3: Añadir un Método Público
    // 1. Crear un nuevo método denominado printCollection que recorra todos los objetos del
    // atributo mobile y los muestre por consola de la siguiente manera :
    // This is all my mobiles:
    // The characteristics of the mobile name are:
    // • Name: name
    // • Trademark: tradeMark
    // • model: model
    // • Color: color
    // • Price: price
    // The characteristics of the mobile name are:
    // • Name: name
    // • Trademark: tradeMark
    // • model: model
    // • Color: color
    // • Price: price
    // ……
    // Price overall: totalPrice“
    MobileCollection.prototype.printCollection = function () {
        console.log("----------------------------------------------");
        console.log("This is all my mobiles:");
        this.mobiles.forEach(function (mobile) {
            console.log("----------------------------------------------");
            console.log("The characteristics of the mobile ".concat(mobile.getName(), " are:"));
            console.log("Name: ".concat(mobile.getName()));
            console.log("Trademark: ".concat(mobile.getTrademark()));
            console.log("Model: ".concat(mobile.getModel()));
            console.log("Color: ".concat(mobile.getColor()));
            console.log("Price: ".concat(mobile.getPrice()));
        });
        console.log("Price overall: ".concat(this.getTotalPrice()));
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
