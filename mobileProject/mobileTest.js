"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Continuación del Reto 1: Creación de la Clase con Typescript
// 4. En otro fichero denominado mobileTest.ts importar la clase Mobile.
// 5. Crear un nuevo objeto myMobile de la clase Mobile, en el fichero mobileTest.ts, y probar
// todos sus métodos.
// 6. Subir los cambios a GitHub.
var mobile_1 = require("./mobile");
// Crea un nuevo objeto myMobile de la clase Mobile
var myMobile = new mobile_1.Mobile('iPhone 14', 'iPhone', 'Pro MAX', 'Purpura', 1479);
// métodos Getters
console.log('Name:', myMobile.getName()); //  iPhone 14
console.log('Trademark:', myMobile.getTrademark()); //iPhone
console.log('Model:', myMobile.getModel()); // Pro MAX
console.log('Color:', myMobile.getColor()); // Purpura
console.log('Price:', myMobile.getPrice()); // 1479
//métodos setter
myMobile.setName('SamSung Galaxy');
myMobile.setTrademark('SamSung');
myMobile.setModel('S23 ULTRA');
myMobile.setColor('Gris');
myMobile.setPrice(1197);
// vuelvo a imprimir para mostrar cambios
console.log("--------------------------------------------------------");
console.log('Name:', myMobile.getName()); //SamSung Galaxy
console.log('Trademark:', myMobile.getTrademark()); // SamSung
console.log('Model:', myMobile.getModel()); // S23 ULTRA
console.log('Color:', myMobile.getColor()); // Gris
console.log('Price:', myMobile.getPrice()); // 1197
/////////////////// //Continuación Reto 2: Añadir Nuevo Método
// 2. Crear tres objetos de la clase Mobile en el fichero mobileTest.ts.
var mobile1 = new mobile_1.Mobile('iPhone 13', 'iPhone', 'Pro', 'Dorado', 959);
var mobile2 = new mobile_1.Mobile('iPhone 12', 'iPhone', 'Plus Ultra', 'Rojo', 849);
var mobile3 = new mobile_1.Mobile('iPhone 11', 'iPhone', 'Mini', 'Verde', 799);
// 3. Crear un array denominado myMobiles en el fichero mobileTest.ts que tendrá los tres
// objetos creados en el punto 2.
var myMobiles = [mobile1, mobile2, mobile3];
// 4. Mostrar los datos de myMobiles invocando al método del punto 1.
// 5. Subir los cambios a GitHub. Y hacer merge con la rama principal.
myMobiles.forEach(function (mobile) {
    mobile.printCaracteristicas();
    console.log('-------------------');
});
