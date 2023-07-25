//Continuación del Reto 3
//4. Probar la clase contacts en un fichero denominado contactsTest.ts
import {contacts} from "./contacts"
import {Person} from "./person"
let contacts1 = new contacts();
contacts1.people.push(new Person("Janet", 33, "calle Eduardo Lozano García"));
contacts1.printCalendar();