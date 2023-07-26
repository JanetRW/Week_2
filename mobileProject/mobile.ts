// ///////////////////////////Reto 1: Creación de la Clase con Typescript
// 1. Trabajar en la rama repaso2, crear una nueva carpeta denominada mobileProject y
// crear el fichero mobile.ts. Dicho fichero debe contener la clase Mobile con los siguientes
// atributos privados:
// • name: string
// • trademark: string
// • model: string
// • color: string
// • price: number
// 2. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// 3. Crear los métodos setters y getters para todos los atributos de la clase.


export class Mobile{
    private name: string;
    private trademark:string;
    private model:string;
    private color:string;
    private price:number;

        constructor(name:string,trademark:string,model:string,color:string,price:number){
            this.name=name;
            this.trademark=trademark;
            this.model=model;
            this.color=color;
            this.price=price;
        }
        //métodos Getters
        public getName():string{
            return this.name;
        }
        public getTrademark():string{
            return this.trademark;
        }
        public getModel():string{
            return this.model;
        }
        public getColor():string{
            return this.color;
        }
        public getPrice():number{
            return this.price;
        }
        //Setter
        public setName(name:string):void{
            this.name = name;
        }
        public setTrademark(trademark:string):void{
            this.trademark = trademark;
        }
        public setModel(model:string):void{
            this.model = model;
        }
        public setColor(color:string):void{
            this.color = color;
        }
        public setPrice(price:number):void{
            this.price = price;
        }
// //Reto 2: Añadir Nuevo Método
// 1. Crear un nuevo método que imprima por consola todas las características de la clase
// siguiendo el siguiente patrón:
// “The characteristics of the mobile name are:”
// • Name: name
// • Trademark: tradeMark
// • model: model
// • Color: color
// • Price: price
        printCaracteristicas(): void {
            console.log("---------------------------------------------------------")
            console.log(`The characteristics of the mobile ${this.name} are:`);
            console.log(`Name: ${this.name}`);
            console.log(`Trademark: ${this.trademark}`);
            console.log(`Model: ${this.model}`);
            console.log(`Color: ${this.color}`);
            console.log(`Price: ${this.price}`);
          }      
}