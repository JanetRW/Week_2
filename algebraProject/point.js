"use strict";
// //Reto 1: Clase Point con Typescript
// 1. Trabajar en la rama repaso4, crear una nueva carpeta denominada algebraProject y crear el
// fichero point.ts.
// 2. Dicho fichero debe contener la clase Point con los siguientes atributos privados:
// • x: number
// • y: number
// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.
// 5. Crear un método toString() que convierta a texto las coordenadas del punto.
// Debe devolver: “(x,y)”
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    //Getter
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    //Setter
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    // Método toString()
    Point.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    ////////////////////////////////////Reto 2: Métodos de Distancias
    // 1. Crear un método denominado distanceToOrigin():number que devuelva la distancia del
    // punto al origen de coordenadas (0,0).
    // NOTA: Buscar en Google la formula para calcular la distancia.
    Point.prototype.distanceToOrigin = function () {
        var distancia = Math.sqrt(this.x * this.x + this.y * this.y);
        return distancia;
    };
    //2. Crear un método denominado calculateDistance(anotherPoint:Point):number, que
    //devuelva la distancia entre el punto representado por la instancia actual del objeto y otra
    //instancia de Punto que se recibe como parámetro denominada anotherPoint.
    //NOTA: Buscar en Google la formula para calcular la distancia entre dos puntos.
    Point.prototype.calculateDistance = function (anotherPoint) {
        var distancia = Math.sqrt(Math.pow((this.x - anotherPoint.getX()), 2) + Math.pow((this.y - anotherPoint.getY()), 2)); //fórmula de la distancia euclidiana
        return distancia;
    };
    return Point;
}());
exports.Point = Point;
