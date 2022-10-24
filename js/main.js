function saludar(nombre, momento) { //dentro del parentesis se agrega el parametro para la funcion

    alert("Buenas, como estas " + nombre);
}






//llamado de la funciom
let nombreUsuario = prompt("Ingresa tu nombre");
saludar(nombreUsuario)



let savedPass = "naruto";

for (let i = 0; i < 3; i++) {
    let userPass = prompt("Personaje que evangeliza");
    if (userPass === savedPass) {
        alert("Adivinaste!");
        break;
    }
    alert("No, no es. otro intento");



}
alert("otra pregunta")
let personajeCorrecto = "gaara";
let continuar = true;
let personajeUsuario = prompt("Que personaje es el Jinchuuriki del shukaku?");

while (continuar) {
    if (personajeCorrecto === personajeUsuario) {
        alert("Bien! Parece que sos un fan");
        continuar = false;
        break;
    }

    alert("personaje incorrecto");
    personajeUsuario = prompt("Jinchuuriki del shukaku");
}


alert("siguiente adivinanza")
let opcion = prompt("Que poder es caracteristico de Naruto: \n1- Chidori \n2- Amaterasu \n3- Rasengan \n4- Bola de fuego");
switch (opcion) {
    case "1":
        alert("Este es de Sasuke");
        break;
    case "2":
        alert("No, no es");
        break;
    case "3":
        alert("Correcto");
        break;
    case "4":
        alert("Casi pero no");
        break

    default:
        alert("invalido tonto")
}