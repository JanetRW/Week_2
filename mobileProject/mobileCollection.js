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
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.calcularTotalPrice();
    }
    // Método para calcular el precio total a partir de los precios de los móviles en el array
    MobileCollection.prototype.calcularTotalPrice = function () {
        this.totalPrice = this.mobiles.reduce(function (total, mobile) { return total + mobile.getPrice(); }, 0);
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
        this.calcularTotalPrice();
    };
    MobileCollection.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
