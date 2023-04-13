// 1) Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada. 

const punto1 = Array(6)
    .fill()
    .map(() => Math.floor(100 * Math.random()));
console.log(punto1.sort());

const lista = document.getElementById("punto1");
punto1.forEach((item)=>{
const li = document.createElement("li");
li.innerText = item;
lista.appendChild(li);
})



// 2)
// a) Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
// pantalla.

const punto2a = [1,2,3,4,5,6]
let i = 0
while(i<=punto2a.length-1) {
console.log(punto2a[i]); i++}


//b) Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
// pantalla.

const punto2b = [1,2,3,4,5,6];
for (i = 0; i < punto2b.length; i++) {
console.log(punto2b[i]); }
    

// c) Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
// en pantalla.

const punto2c = [1,2,3,4,5,6];
punto2c.forEach(function(value, index){
console.log(value);
console.log(index);})


// d) Mostrar todos los elementos dentro de un array sumándole uno a cada uno

const punto2d = [1,2,3,4,5,6]
const mas1 = punto2d.map(function(x) {
return x + 1; });
console.log(mas1)


// e) Generar una copia de un array pero con todos los elementos incrementados en 1.

const copiadepunto2d = mas1
const incremento1 = copiadepunto2d.map(function(x) {
return x + 1; });
console.log(incremento1)


// f) Calcular el promedio

const punto2f = [1,2,3,4,5,6]
const average = punto2f.reduce((a, b) => a + b) / punto2f.length;
console.log(average);


// 7) Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares (Recuerda que ((numero % 2) == 0) determina si un numero es
// par o no, si tiene el resultado ==0 es par, sino es impar)

function funcion (puntos) {
console.log(puntos) }
const punto7 = [1,2,3,4,5,6,7,8,9,10]
const punto7a = punto7.filter(n => n %2 ==0 )
funcion(punto7a);

// 8) Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.

function funcionn (puntoss) {
console.log(puntoss) }
const punto8 = ["Tarea", "Yosha", "Alto", "Fire Emblem", "Asael", "NieR", "Yolo", "Voy", "Esoooo", "Automata"];
const punto8A = punto8.filter((vocal) => vocal.startsWith("A"));
funcionn(punto8A);


// 13) Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en un
// div con un nombre de clase), repetir esto para tres noticias. Agregar tres botones que
// rescaten el nombre de la clase para la descripción de la noticia y cambien su tamaño de
// fuente


// 14) Crear una página que contenga dos tablas de 3 filas y 3 columnas cada una con un texto
// en cada casillero. Luego al presionar un botón cambiar por la cadena "-" solo el contenido
// de la primera tabla, dejando intacto el de la segunda.

