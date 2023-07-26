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


export class Point{
    private x:number;
    private y:number;
      constructor(x:number,y:number){
        this.x = x;
        this.y =y;
      }
      //Getter
      public getX():number{
        return this.x;
      }
      public getY():number{
        return this.y;
      }
      //Setter
      public setX(x:number):void{
        this.x=x;
      }
      public setY(y:number):void{
        this.y=y;
      }
      // Método toString()
    toString(): string {
    return `(${this.x},${this.y})`;
    }
////////////////////////////////////Reto 2: Métodos de Distancias
// 1. Crear un método denominado distanceToOrigin():number que devuelva la distancia del
// punto al origen de coordenadas (0,0).
// NOTA: Buscar en Google la formula para calcular la distancia.
    public distanceToOrigin(): number {
        let distancia= Math.sqrt(this.x * this.x + this.y * this.y);
        return distancia;
      }
//2. Crear un método denominado calculateDistance(anotherPoint:Point):number, que
//devuelva la distancia entre el punto representado por la instancia actual del objeto y otra
//instancia de Punto que se recibe como parámetro denominada anotherPoint.
//NOTA: Buscar en Google la formula para calcular la distancia entre dos puntos.

    public calculateDistance(anotherPoint: Point): number {
    let distancia = Math.sqrt((this.x - anotherPoint.getX()) ** 2 + (this.y - anotherPoint.getY()) ** 2);//fórmula de la distancia euclidiana
    return distancia;
  }
}