
// Declarar variable que alude al botón
const startButton = document.getElementById('startButton');
//Crear el eventListener "boton start, tipo click"
startButton.addEventListener("click", elegirCoders);
//Variable que indica
const showCoders = document.getElementById('nombreElegido');

//Array lleno
let listaCoders = ["Sandra", "Valentina", "Laura", "Rosa", "Tamara", "Judith", "Helen", "Carmen", "Candy", "Gabrielle", "Yulilla", "Anna G",
    "Sonia", "Desirée", "Alisa", "Faby",
    "Ana C", "Joana", "Gracia", "Alexia", "Marisa", "Laura M", "Rosa", "Kristina"];

//Array vacío    
let codersElegidas = [];


//Función mostrar coders que será llamada una vez hayamos elegido las coders para que las vuelva a mostrar en pantalla
function mostrarCoders(){
    listaCoders.forEach(coder =>

        document.getElementById("coderList").innerHTML +="<div id=showCoders><p id=textoCarta>"+coder+"</p></div>"
       
       
    )
    if (listaCoders.length === 0) {
         listaCoders = ["Sandra", "Valentina", "Laura", "Rosa", "Tamara", "Judith", "Helen", "Carmen", "Candy", "Gabrielle", "Yulilla", "Anna G",
    "Sonia", "Desirée", "Alisa", "Faby",
    "Ana C", "Joana", "Gracia", "Alexia", "Marisa", "Laura M", "Rosa", "Kristina"];
    
    }
}

//Funcion elegir coders, nos da un número aleatoría y nos muesta el nombre asociado a esa posición del array
function elegirCoders() {

    let position = Math.floor(Math.random() * listaCoders.length)
    codersElegidas.push(position);
    let coderElegida = listaCoders.splice(position,1);
  
    showCoders.innerHTML = coderElegida[0];

    // borra la lista actual 
    document.getElementById("coderList").innerHTML = "";
    
    // vuelve a dibujar la lista
    //llamamos a la función mostrarCoders
    mostrarCoders();  

}

/* //Código modo navidad
const logo = document.getElementById("#toggle-theme");
const siluetaCarta = document.getElementById('#showCoders')  */

 function cambiarBoom(){
    document.getElementById("toggle-theme").innerHTML = '<img src="img/pistolas.png" alt="imagen_pistolas">';
    document.getElementsByClassName("title").innerHTML = '<h1 class="title">WHEEL OF BOOM</h1>';
} 

function cambiarImagen(){
    document.getElementById("toggle-theme").innerHTML = '<img src="img/logonavidad.png" alt="imagen_logo_navidad">';
    document.getElementsByClassName("title").innerHTML = '<h1 class="title">WHEEL OF BOOM</h1>';
    
}

//Función reproductor
let button = document.querySelector(".reproductor")

    button.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "audio/Bullet2.mp3")
      etiquetaAudio.play()
    })
    
 let button2 = document.querySelector(".reproductor1")

    button2.addEventListener("click", () => {
      let etiquetaAudio1 = document.createElement("audio")
      etiquetaAudio1.setAttribute("src", "audio/calibre.mp3")
      etiquetaAudio1.play()
    })

let button3 = document.querySelector("#switch")

    button3.addEventListener("click", () => {
      let etiquetaAudio1 = document.createElement("audio")
      etiquetaAudio1.setAttribute("src", "audio/calibre.mp3")
      etiquetaAudio1.play()
    })
    

  



