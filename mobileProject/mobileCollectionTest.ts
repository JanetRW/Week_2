////////////////////////////Continuación Reto 1: Creación de la Clase con Typescript
// 5. En otro fichero denominado mobileCollectionTest.ts importar la clase MobileCollection.
// 8. Subir los cambios a GitHub.
import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

// 6. En dicho fichero crear 4 objetos de la clase Mobile y un array que los contenga.
let myMobile1 = new Mobile("SamSung Galaxy Z","SamSung","Flip 5","Plateado",1209)
let myMobile2 = new Mobile("Redmi","Xiaomi","Note 12","Celeste",247);
let myMobile3 = new Mobile("Reno 10","Oppo","Pro 5G","Rosa",649);
let myMobile4 = new Mobile("Mate 50","Huawei","Pro Black","Black",800);

let arrayMobile: Mobile[] = [myMobile1, myMobile2, myMobile3, myMobile4];
// 7. Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis creado
// previamente y comprobar todos sus métodos.
let myCollection = new MobileCollection(arrayMobile);

// Probamos los métodos getter y setter de la clase MobileCollection
console.log("Coleción de Moviles:");
console.log(myCollection.getMobiles());

console.log("Total price of the collection:");
console.log(myCollection.getTotalPrice());

// Cambiamos el array de móviles en myCollection utilizando el método setter setMobiles
let nuevoMobile: Mobile[] = [myMobile1, myMobile2];
myCollection.setMobiles(nuevoMobile);

console.log("Moviles actualizados en la colección:");
console.log(myCollection.getMobiles()); 

console.log("Precios Totales actualizados en la colección:");
console.log(myCollection.getTotalPrice());

///////////////////////Reto 2: Añadir un Método Privado
//3. Probar de nuevo el método getPrice de la clase en el fichero mobileCollectionTest.ts
// 4. Subir los cambios a GitHub.
//En realidad, el método que queremos probar es getPrice,
//pero dicho método no existe en la clase MobileCollection.Verificamos el método getTotalPrice funcione correctamente después de haber añadido el método privado totalPriceCalculation en la clase MobileCollection.
//Por lo tanto, no necesitamos realizar ninguna prueba específica para el método getPrice , ya que dicho método no forma parte de la clase MobileCollection

// Probamos el método getTotalPrice para obtener el precio total de la colección
console.log("Total price of the collection:");
console.log(myCollection.getTotalPrice()); //Muestra precio total de los móviles en la colección
