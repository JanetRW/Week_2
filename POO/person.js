///////////////////////////////////Reto 1
// 1. Crea un repositorio de Git llamado “Week_2”. Haz una rama por día(4 días) llamadas
// “dia1”, “dia2” etc..
// 2. Para los retos de hoy trabajaremos desde la rama “dia1”.
// 3. Crea una carpeta llamada POO, donde guardaremos todos los retos de hoy.
// 4. Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
// tener como mínimo 2 parámetros de entrada.

class Person{
    constructor(nombre,apellidos,edad,yearOfBirth,altura,peso,hobbies){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad //= this.calcularEdad(2023);
        this.yearOfBirth = yearOfBirth;
        this.altura = altura;
        this.peso = peso;
        this.hobbies = hobbies; //[];
    }
/////////////////////////////////////////RETO 2///////////////////////////////////
// Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC
// (índice de mas corporal) de cualquier persona que se haya creado como un objeto de la
// clase.
    //métodos
    calcularIMC(){
        return this.peso /Math.pow(this.altura,2) * 10000;
    }
/////////////////////////////////////////RETO 3///////////////////////////////////
// Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome
// como parámetro el año y calcule la edad de la persona.
    calcularEdad(anyoActual){
        return anyoActual - this.yearOfBirth;
    }
/////////////////////////////////////////RETO 4///////////////////////////////////
// Añadir un método que se denomine printAll que muestre por consola cada uno de los
// atributos de la clase Person seguido por “-” y el valor del atributo.
    printAll(){
    for (let atributos in this){
        console.log(`${atributos} - ${this[atributos]}`)
                }
    }
/////////////////////////////////////////RETO 5///////////////////////////////////
//Añadir el atributo hobbies a la clase Person, que es un array de strings, y crear un método
//denominado printHobbies, que muestre por consola las aficiones de la persona.
    printHobbies(){
    if(this.hobbies.length === 0) {
    console.log(this.nombre +" no hay hobbies por mostrar");
    } else {
    console.log(this.nombre +" tiene estos hobbies:");
    this.hobbies.forEach(mihobbie => {console.log(mihobbie);});
            }
    }

}
module.exports=Person;


