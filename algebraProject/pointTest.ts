///////////////////////////Continuación Reto 1: Clase Point con Typescript
// 6. En otro fichero denominado pointTest.ts importar la clase Point.
// 7. Crear un nuevo objeto myPoint de la clase Point, en el fichero pointTest.ts, y probar todos sus
// métodos. Subir los cambios a GitHub.
import {Point} from "./point"

let myPoint:Point = new Point(4,9);

//método toString()
console.log("Coordenadas:", myPoint.toString()); // "Coordenadas: (4,9)"

//métodos getters
console.log("Coordenada X:", myPoint.getX()); // "Coordenada X: 4"
console.log("Coordenada Y:", myPoint.getY()); // "Coordenada Y: 9"

//métodos setters
myPoint.setX(6);
myPoint.setY(10);
console.log("Nuevas coordenadas:", myPoint.toString()); // "Nuevas coordenadas: (6,10)"

///////////////Del Reto 2: Métodos de Distancias
//3. Modificar el fichero pointTest.ts para probar los nuevos métodos
//4. Subir los cambios a GitHub.
console.log('Distancia al origen:', myPoint.distanceToOrigin());
let anotherPoint = new Point(7, 3);
console.log('Coordenadas de otro punto:', anotherPoint.toString());
//mostrar distancia entre los puntos
console.log('Distancia entre los puntos:', myPoint.calculateDistance(anotherPoint));

////////////////Reto 3: Método Calcular Cuadrante
//1. Programa un método denominado calculateQuadrant():number que devuelva el
//cuadrante en el que se encuentra el punto. 
console.log('Cuadrante del punto actual:', myPoint.calculateQuadrant());
console.log('Cuadrante del otro punto:', anotherPoint.calculateQuadrant());

////////////////Reto 4: Calcular el Punto Más Cercano
//1. Programa un método denominado calculateNearest(points : Point[]) : Point, que reciba
//como parámetro un array de objetos de la clase Point y devuelva una referencia al objeto
//de dicho array que esté más cercano al punto actual.
//NOTA: Utilizar para ello el método calculateDistance implementado en el reto3.
let arrayPoint = [new Point(1,3), new Point(-4,2),new Point(4,3),new Point(-1,-5)];

//Mostrar punto más cercano en el array de puntos
let pointCerca = myPoint.calculateNearest(arrayPoint);
console.log('El Punto más cercano es:', pointCerca.toString());
