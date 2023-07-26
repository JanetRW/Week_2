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
// Reto 2: Añadir un Método Privado
// 1. Crear un método privado denominado totalPriceCalculation sin parámetros de entrada,
// que te calcule el precio total de la colección.
// NOTA: Debe realizar la suma de los precios de todos los objetos almacenados en el
// atributo mobiles.
// 2. En el constructor llamar totalPriceCalculation y guardarlo en su atributo correspondiente.
// 3. Probar de nuevo el método getPrice de la clase en el fichero mobileCollectionTest.ts
// 4. Subir los cambios a GitHub.
