"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////Continuación Reto 1: Clase Point con Typescript
// 6. En otro fichero denominado pointTest.ts importar la clase Point.
// 7. Crear un nuevo objeto myPoint de la clase Point, en el fichero pointTest.ts, y probar todos sus
// métodos. Subir los cambios a GitHub.
var point_1 = require("./point");
var myPoint = new point_1.Point(4, 9);
//método toString()
console.log("Coordenadas:", myPoint.toString()); // "Coordenadas: (4,9)"
//métodos getters
console.log("Coordenada X:", myPoint.getX()); // "Coordenada X: 4"
console.log("Coordenada Y:", myPoint.getY()); // "Coordenada Y: 9"
//métodos setters
myPoint.setX(6);
myPoint.setY(10);
console.log("Nuevas coordenadas:", myPoint.toString()); // "Nuevas coordenadas: (6,10)"
////Del Reto 2: Métodos de Distancias
//3. Modificar el fichero pointTest.ts para probar los nuevos métodos
//4. Subir los cambios a GitHub.
console.log('Distancia al origen:', myPoint.distanceToOrigin());
var anotherPoint = new point_1.Point(7, 3);
console.log('Coordenadas de otro punto:', anotherPoint.toString());
//mostrar distancia entre los puntos
console.log('Distancia entre los puntos:', myPoint.calculateDistance(anotherPoint));
