// ////////////////////////////////Reto 9: Probar la Clase Vector
// 3. Importar la clase en otro fichero denominado vectorTest.ts.
// - import { Vector } from "./vector”
// 4. Crear un Objeto de la clase Vector y probar todos sus atributos y métodos.
// 5. Sube todos los cambios a tu rama “dia2” y después haz ”merge” con tu rama
// “master/main”. En caso de tener conflicto soluciónalos.
// 6. Haz una versión de esta subida.

import {Vector} from "./vector"
// Crear objetos de la clase Vector 
let vector1 = new Vector(2,8);
let vector2 = new Vector(2,8);


//Probar sus atributos y métodos
console.log("Vector 1:");
vector1.print();
console.log("Vector 2:");
vector2.print();

let sumaVector = vector1.add(vector2);
console.log("Suma de vectores:");
sumaVector.print();

let restaVector = vector1.subs(vector2);
console.log("Resta de vectores:");
restaVector.print();

let multiplicarVector = vector1.mult(vector2);
console.log("Producto de vectores:");
multiplicarVector.print();

let productoVector1 = vector1.multNumber(3);
console.log("Producto del vector 1 por 3:");
productoVector1.print();

let productoVector2 = vector2.multNumber(5);
console.log("Producto del vector 2 por 5:");
productoVector2.print();