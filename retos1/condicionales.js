//////////////////////////////Retos de Condicionales
// 1. Trabajar en la rama repaso1 .En una carpeta nueva. Ej: retos1. Guarda estos retos en un
// fichero .js Ej: condicionales.ts
// 2. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
// La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)
console.log("-----------------------------Ejercicio 2----------------------------");
function zodiac(day, month) {
    if ((day >= 21 && month === 3) || (day <= 19 && month === 4)) {
        return "Aries";
    }
    else if ((day >= 20 && month === 4) || (day <= 20 && month === 5)) {
        return "Tauro";
    }
    else if ((day >= 21 && month === 5) || (day <= 20 && month === 6)) {
        return "Géminis";
    }
    else if ((day >= 21 && month === 6) || (day <= 22 && month === 7)) {
        return "Cáncer";
    }
    else if ((day >= 23 && month === 7) || (day <= 22 && month === 8)) {
        return "Leo";
    }
    else if ((day >= 23 && month === 8) || (day <= 22 && month === 9)) {
        return "Virgo";
    }
    else if ((day >= 23 && month === 9) || (day <= 22 && month === 10)) {
        return "Libra";
    }
    else if ((day >= 23 && month === 10) || (day <= 21 && month === 11)) {
        return "Escorpio";
    }
    else if ((day >= 22 && month === 11) || (day <= 21 && month === 12)) {
        return "Sagitario";
    }
    else if ((day >= 22 && month === 12) || (day <= 19 && month === 1)) {
        return "Capricornio";
    }
    else if ((day >= 20 && month === 1) || (day <= 18 && month === 2)) {
        return "Acuario";
    }
    else if ((day >= 19 && month === 2) || (day <= 20 && month === 3)) {
        return "Piscis";
    }
    else {
        return "Fecha de Nacimiento no valida!";
    }
}
// main
var signoZodiacal = zodiac(24, 3); //Día de nacimiento:24, mes:3
console.log(signoZodiacal); // Salida: "Aries"
//3.Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// estás. (Max 5 países por continente).
// La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)
console.log("-----------------------------Ejercicio 3----------------------------");
function continent(country) {
    var paisporContinente = {
        // América
        "Perú": "América", "Colombia": "América", "Ecuador": "América", "Bolivia": "América", "Brasil": "América",
        // Europa
        "España": "Europa", "Francia": "Europa", "Portugal": "Europa", "Alemania": "Europa", "Rumania": "Europa",
        // Asia
        "Corea del Sur": "Asia", "India": "Asia", "China": "Asia", "Indonesia": "Asia", "Tailandia": "Asia",
        // África
        "Egipto": "África", "Sudafrica": "África", "Kenia": "África", "Marruecos": "África", "Tanzania": "África",
        // Oceanía
        "Australia": "Oceanía", "Nueva Zelanda": "Oceanía", "Nauru": "Oceanía", "Palaos": "Oceanía", "Kiribati": "Oceanía",
    };
    // Obtener el país actual
    var actualCountry = country;
    // Buscar el país en el objeto y determinar su continente correspondiente
    var continente = paisporContinente[actualCountry];
    if (continente) {
        console.log("El pa\u00EDs ".concat(actualCountry, ", se encuentra en el continente ").concat(continente, "."));
    }
    else {
        console.log("No se encontr\u00F3 informaci\u00F3n para el pa\u00EDs \"".concat(actualCountry, "\"."));
    }
}
// main
continent("Perú");
continent("Francia");
continent("India");
continent("Australia");
continent("Argentina");
continent("Ghana");
//4. Realizar una función que te imprima por consola el siguiente mensaje:
//- “El numero es par”, si el numero introducido como parámetro de entrada es par
//- “El numero es impar”, si el numero introducido como parámetro de entrada es impar
console.log("-----------------------------Ejercicio 4----------------------------");
function isEven(miNumero) {
    if (miNumero % 2 === 0) {
        console.log("El numero es par");
    }
    else {
        console.log("El numero es impar");
    }
}
//main
var numero1 = 54;
var numero2 = 33;
isEven(numero1);
isEven(numero2);
