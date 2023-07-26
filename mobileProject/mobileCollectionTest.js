"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
////////////////////////////Continuación Reto 1: Creación de la Clase con Typescript
// 5. En otro fichero denominado mobileCollectionTest.ts importar la clase MobileCollection.
// 8. Subir los cambios a GitHub.
var mobile_1 = require("./mobile");
var mobileCollection_1 = require("./mobileCollection");
// 6. En dicho fichero crear 4 objetos de la clase Mobile y un array que los contenga.
var myMobile1 = new mobile_1.Mobile("SamSung Galaxy Z", "SamSung", "Flip 5", "Plateado", 1209);
var myMobile2 = new mobile_1.Mobile("Redmi", "Xiaomi", "Note 12", "Celeste", 247);
var myMobile3 = new mobile_1.Mobile("Reno 10", "Oppo", "Pro 5G", "Rosa", 649);
var myMobile4 = new mobile_1.Mobile("Mate 50", "Huawei", "Pro Black", "Black", 800);
var arrayMobile = [myMobile1, myMobile2, myMobile3, myMobile4];
// 7. Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis creado
// previamente y comprobar todos sus métodos.
var myCollection = new mobileCollection_1.MobileCollection(arrayMobile);
// Probamos los métodos getter y setter de la clase MobileCollection
console.log("Coleción de Moviles:");
console.log(myCollection.getMobiles());
console.log("Total price of the collection:");
console.log(myCollection.getTotalPrice());
// Cambiamos el array de móviles en myCollection utilizando el método setter setMobiles
var nuevoMobile = [myMobile1, myMobile2];
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
////Reto 3: Añadir un Método Público
//2. Probar el nuevo método printCollection de la clase en el fichero mobileCollectionTest.ts
//3. Subir los cambios a GitHub. Y hacer merge con la rama principal.
myCollection.printCollection();
