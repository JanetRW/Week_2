"use strict";
// //////////////////////////////////Reto 8: Clase Vector
// No olvides seguir trabajando sobre tu rama “dia2”.
// Crear la Clase Vector con la siguiente estructura:
// • Atributo Privado:
// - elements: array of numbers.
// • El Constructor debe contener los siguientes parámetros:
// - n: number. Longitud del vector.
// - k: number. Máximo valor de los elementos del vector.
// Este constructor tiene que crear el atributo elements formado por n números aleatorios entre 0 y k.
// • Metodos Públicos:
// - print(). Imprime por consola el vector.
// - add(v1:Vector):Vector. Realiza la suma de elements con v1.
// - subs(v1:Vector):Vector. Realiza la resta de elements con v1.
// - mult(v1:Vector):Vector. Realiza el producto de elements y v1.
// - multNumber(n:number):Vector. Realiza el producto entre elements y el número n.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
// ////////////////////////////////Reto 9: Probar la Clase Vector
// 1. Guardar la clase Vector en un fichero con extensión .ts (vector.ts).
// 2. Modificar ese fichero para exportar la clase.
// - export class Vector
var Vector = /** @class */ (function () {
    // private n = number;
    // private k : number;
    function Vector(n, k) {
        this.n = n;
        this.k = k;
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * (k + 1)));
        }
    }
    //Métodos públicos
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        if (this.elements.length !== v1.elements.length) {
            console.log("Los vectores deben tener la misma longitud para la suma");
        }
        var resultado = new Vector(this.n, this.k);
        resultado.elements = this.elements.map(function (elem, indice) { return elem + v1.elements[indice]; });
        return resultado;
    };
    Vector.prototype.subs = function (v1) {
        if (this.elements.length !== v1.elements.length) {
            console.log("Los Vectores deben tener la misma longitud para la resta");
        }
        var resultado = new Vector(this.n, this.k);
        resultado.elements = this.elements.map(function (elem, indice) { return elem - v1.elements[indice]; });
        return resultado;
    };
    Vector.prototype.mult = function (v1) {
        if (this.elements.length !== v1.elements.length) {
            console.log("Los Vectores deben tener la misma longitud para la multiplicación");
        }
        var resultado = new Vector(this.n, this.k);
        resultado.elements = this.elements.map(function (elem, indice) { return elem * v1.elements[indice]; });
        return resultado;
    };
    Vector.prototype.multNumber = function (n) {
        var resultado = new Vector(this.n, this.k);
        resultado.elements = this.elements.map(function (elem) { return elem * n; });
        return resultado;
    };
    return Vector;
}());
exports.Vector = Vector;
