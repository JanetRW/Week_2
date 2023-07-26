// //////////////////////Reto 1: Creación de la Clase con Typescript
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
// 4. En otro fichero denominado mobileTest.ts importar la clase Mobile.
// 5. Crear un nuevo objeto myMobile de la clase Mobile, en el fichero mobileTest.ts, y probar
// todos sus métodos.
// 6. Subir los cambios a GitHub.
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
        //métodos Getters y Setters
        public getName():string{
            return this.name;
        }
        public setName():void{
            this.name = name;
        }
        public geTt():string{
            return this.name;
        }
        public setName():void{
            this.name = name;
        }

}

// Reto 2: Añadir Nuevo Método
// 1. Crear un nuevo método que imprima por consola todas las características de la clase
// siguiendo el siguiente patrón:
// “The characteristics of the mobile name are:”
// • Name: name
// • Trademark: tradeMark
// • model: model
// • Color: color
// • Price: price
// 2. Crear tres objetos de la clase Mobile en el fichero mobileTest.ts.
// 3. Crear un array denominado myMobiles en el fichero mobileTest.ts que tendrá los tres
// objetos creados en el punto 2.
// 4. Mostrar los datos de myMobiles invocando al método del punto 1.
// 5. Subir los cambios a GitHub. Y hacer merge con la rama principal.