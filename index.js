
let listaCoders = ["Sandra", "Valentina", "Laura", "Rosa", "Tamara", "Judith", "Helen", "Carmen", "Candy", "Gabrielle", "Yulilla", "Anna G",
    "Sonia", "Desirée", "Alisa", "Faby",
    "Ana C", "Joana", "Gracia", "Alexia", "Marisa", "Laura M", "Rosa", "Kristina"];




// Declarar variable que alude al botón
const startButton = document.getElementById('startButton');
//Crear el eventListener "boton start, tipo click"
startButton.addEventListener("click", elegirCoders);
//Variable que indica
const showCoders = document.getElementById('nombreElegido');
//Crear la función que nos dará el nombre aleatorio
function elegirCoders() {

    let coderElegida = listaCoders[Math.floor(Math.random() * listaCoders.length)];

    showCoders.innerHTML = coderElegida;

}

listaCoders.forEach(coderElegida =>

    document.getElementById("coderList").innerHTML +="<div id=showCoders><p id=textoCarta>"+coderElegida+"</p></div>"

)




  
    
    



    

    



    

    

    





