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
    }