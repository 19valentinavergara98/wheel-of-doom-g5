
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
    //console.log(listaCoders);
    

}

//Código modo navidad
const toggleTheme = document.getElementById(toggle);
const logo = document.getElementById(logo);
const toggleIcon = document.getElementById(toggle_theme_icon);
const cardIcon = document.getElementById(showCoders);


toggle.addEventListener("click", ()=>{
    document.body.classList.toggle('navidad');
    if(toggleIcon.src.includes('skull-crossbones-solid.svg')){
        toggleIcon.src='img/skull-crossbones-solid.svg'
        cardIcon.src.includes('img/papanoel2.jpg')
        logo.src='img/logonavidad.png'
    }else{
       
    }
})




  
    
    



    

    



    

    

    



