// //////////////////////////Reto 1: Creación de la Clase con Typescript
// 1. Trabajar en la rama repaso2 dentro de la carpeta creada en el reto anterior crear el fichero
// mobileCollection.ts
// 2. Dicho fichero debe contener la clase MobileCollection con los siguientes atributos privados:
// • mobiles: Mobile[]
// • totalPrice: number
// 3. El constructor debe tener como parámetro de entrada el array de objetos de la clase Mobile.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.

import { Mobile } from "./mobile";
export class MobileCollection{
    private mobiles: Mobile[];
    private totalPrice: number;

// ////////////////////////////////Reto 2: Añadir un Método Privado
// 1. Crear un método privado denominado totalPriceCalculation sin parámetros de entrada,
// que te calcule el precio total de la colección.
// NOTA: Debe realizar la suma de los precios de todos los objetos almacenados en el
// atributo mobiles.
// 2. En el constructor llamar totalPriceCalculation y guardarlo en su atributo correspondiente.

      constructor(mobiles: Mobile[]) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
      }
    
      private totalPriceCalculation(): number {
        return this.mobiles.reduce((total, mobile) => total + mobile.getPrice(), 0);
      }
    
      // Getters
      public getMobiles(): Mobile[] {
        return this.mobiles;
      }
    
      public getTotalPrice(): number {
        return this.totalPrice;
      }
    
      // Setters
      public setMobiles(mobiles: Mobile[]): void {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
      }
    
      public setTotalPrice(totalPrice: number): void {
        this.totalPrice = totalPrice;
      }

// ///////////////////////////Reto 3: Añadir un Método Público
// 1. Crear un nuevo método denominado printCollection que recorra todos los objetos del
// atributo mobile y los muestre por consola de la siguiente manera :
// This is all my mobiles:
// The characteristics of the mobile name are:
// • Name: name
// • Trademark: tradeMark
// • model: model
// • Color: color
// • Price: price
// The characteristics of the mobile name are:
// • Name: name
// • Trademark: tradeMark
// • model: model
// • Color: color
// • Price: price
// ……
// Price overall: totalPrice“
public printCollection(): void {
  console.log("----------------------------------------------");
  console.log("This is all my mobiles:");
  this.mobiles.forEach((mobile) => {
    console.log("----------------------------------------------");
    console.log(`The characteristics of the mobile ${mobile.getName()} are:`);
    console.log(`Name: ${mobile.getName()}`);
    console.log(`Trademark: ${mobile.getTrademark()}`);
    console.log(`Model: ${mobile.getModel()}`);
    console.log(`Color: ${mobile.getColor()}`);
    console.log(`Price: ${mobile.getPrice()}`);
  });
  console.log(`Price overall: ${this.getTotalPrice()}`);
  }
}
