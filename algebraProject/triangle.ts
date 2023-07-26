// //////////////////////////Reto 5: Clase Triangle con Typescript
// 1. Dentro de la carpeta actual crear el fichero triangle.ts. Importar en dicho fichero la clase Point.
// 2. Dicho fichero debe contener la clase Triangle con los siguientes atributos privados:
// • vertex1: Point
// • vertex2: Point
// • vertex3: Point
// Que corresponden a los vértices de un triángulo.
// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// 4. Programa el método calculateLengthSides() : number[] que debe devolver un array de tres posiciones,
// cada una de las cuales debe ser la longitud de uno de los lados del triángulo.
// NOTA: Para ello es importante usar el método calculateDistance de la clase Point.


import { Point } from "./point"
export class Triangle{
    private vertex1: Point;
    private vertex2: Point;
    private vertex3: Point;
        constructor(vertex1:Point,vertex2:Point,vertex3:Point){
            this.vertex1 =vertex1;
            this.vertex2 =vertex2;
            this.vertex3 =vertex3;
        }

        public calculateLengthSides(): number[] {
            let posicion1 = this.vertex1.calculateDistance(this.vertex2);
            let posicion2 = this.vertex2.calculateDistance(this.vertex3);
            let posicion3 = this.vertex3.calculateDistance(this.vertex1);
            return [posicion1, posicion2,posicion3];
          }
}