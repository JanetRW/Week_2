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

// ////////////////////////////////Reto 9: Probar la Clase Vector
// 1. Guardar la clase Vector en un fichero con extensión .ts (vector.ts).
// 2. Modificar ese fichero para exportar la clase.
// - export class Vector
export class Vector{
    //atributos privados
    private elements :number[];
    // private n = number;
    // private k : number;
        constructor(private n:number, private k:number){ 
             this.elements = [];
            for (let i = 0; i < n; i++) {
                this.elements.push(Math.floor(Math.random() * (k + 1)));
              }
            }
        //Métodos públicos
        public print(): void {
            console.log(this.elements);
        }
        public add(v1: Vector): Vector{
            if (this.elements.length !== v1.elements.length) {
              console.log("Los vectores deben tener la misma longitud para la suma");
            }
            let resultado = new Vector(this.n, this.k);
            resultado.elements = this.elements.map((elem, indice) => elem + v1.elements[indice]);
            return resultado;
        }
  
        public subs(v1: Vector): Vector {
            if (this.elements.length !== v1.elements.length) {
                console.log("Los Vectores deben tener la misma longitud para la resta");
            }
            let resultado = new Vector(this.n, this.k);
            resultado.elements = this.elements.map((elem, indice) => elem - v1.elements[indice]);
            return resultado;
        }
  
        public mult(v1: Vector): Vector {
            if (this.elements.length !== v1.elements.length) {
                console.log("Los Vectores deben tener la misma longitud para la multiplicación");
            }
  
            let resultado = new Vector(this.n, this.k);
            resultado.elements = this.elements.map((elem, indice) => elem * v1.elements[indice]);
            return resultado;
        }
  
        public multNumber(n: number): Vector {
            let resultado = new Vector(this.n, this.k);
            resultado.elements = this.elements.map((elem) => elem * n);
            return resultado;
        }
  }
  
  
  