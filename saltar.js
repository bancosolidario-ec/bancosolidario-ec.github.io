function convertir() {

var nombre = document.getElementById("nombre").value 

var cadena = nombre.toLowerCase().split(' ');

for (var i = 0; i < cadena.length; i++) {
 cadena[i] = cadena[i].charAt(0).toUpperCase() + cadena[i].substring(1);
}
nombre = cadena.join(' ');

document.getElementById("textoamostrar").innerHTML = nombre
}