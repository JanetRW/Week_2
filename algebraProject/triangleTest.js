"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///Continuación de Reto 5: Clase Triangle con Typescript
// 5. En otro fichero denominado triangleTest.ts importar la clase Triangle.
// 6. Crear un nuevo objeto myTriangle de la clase Triangle, en el fichero anterior, y probar todos sus
// métodos. Subir los cambios a GitHub. Haced merge con la rama main.
// Ejemplo de uso
var triangle_1 = require("./triangle");
var point_1 = require("./point");
var vertex1 = new point_1.Point(0, 0);
var vertex2 = new point_1.Point(0, 5);
var vertex3 = new point_1.Point(0, 4);
var myTriangle = new triangle_1.Triangle(vertex1, vertex2, vertex3);
var posicion = myTriangle.calculateLengthSides();
console.log(posicion);
