"use strict";
// ////////////////////////////////Reto 9: Probar la Clase Vector
// 3. Importar la clase en otro fichero denominado vectorTest.ts.
// - import { Vector } from "./vector”
// 4. Crear un Objeto de la clase Vector y probar todos sus atributos y métodos.
// 5. Sube todos los cambios a tu rama “dia2” y después haz ”merge” con tu rama
// “master/main”. En caso de tener conflicto soluciónalos.
// 6. Haz una versión de esta subida.
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("./vector");
// Crear objetos de la clase Vector 
var vector1 = new vector_1.Vector(2, 8);
var vector2 = new vector_1.Vector(2, 8);
//Probar sus atributos y métodos
console.log("Vector 1:");
vector1.print();
console.log("Vector 2:");
vector2.print();
var sumaVector = vector1.add(vector2);
console.log("Suma de vectores:");
sumaVector.print();
var restaVector = vector1.subs(vector2);
console.log("Resta de vectores:");
restaVector.print();
var multiplicarVector = vector1.mult(vector2);
console.log("Producto de vectores:");
multiplicarVector.print();
var productoVector1 = vector1.multNumber(3);
console.log("Producto del vector 1 por 3:");
productoVector1.print();
var productoVector2 = vector2.multNumber(5);
console.log("Producto del vector 2 por 5:");
productoVector2.print();
