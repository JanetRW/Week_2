//////////////////////////////////Reto 3: Clase Contacts
// 1. Crear un fichero denominado contacts.ts.
// 2. Importar la clase Person.
// 3. Crear la clase contacts con la siguiente estructura:
// • Atributo Público:
// - people: array de objetos de la clase Person.
// • Constructor sin parámetros que inicialice el array people.
// • Métodos Públicos:
// - printCalendar(). Imprime por consola los datos de todas las personas de la agenda.
// 4. Probar la clase contacts en un fichero denominado contactsTest.ts
import {Person} from "./person"

export class contacts {
    public people : Person[];     
        constructor(){
            this.people = [];
            
        }
        //métodos públicos
        public printCalendar(): void {
            for (let persona of this.people) {
                console.log(`Name: ${persona.name}, Age: ${persona.age}, Address: ${persona.getAddress()}`);
            }
        }

          //otra forma:
          // public printCalendar(): void {
        //     this.people.forEach((person) => {
        //       console.log(`Name: ${person.printName()},Age: ${person.age},Address: ${person.getAddress()}`);
        //     });
        //   }
          
}