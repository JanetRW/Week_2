///Continuación de Reto 5: Clase Triangle con Typescript
// 5. En otro fichero denominado triangleTest.ts importar la clase Triangle.
// 6. Crear un nuevo objeto myTriangle de la clase Triangle, en el fichero anterior, y probar todos sus
// métodos. Subir los cambios a GitHub. Haced merge con la rama main.
// Ejemplo de uso
import { Triangle } from "./triangle"
import { Point } from "./point"
let vertex1 = new Point(0, 0);
let vertex2 = new Point(0, 5);
let vertex3 = new Point(0, 4);

let myTriangle = new Triangle(vertex1, vertex2, vertex3);
let posicion = myTriangle.calculateLengthSides();
console.log(posicion); //[5,1,4]