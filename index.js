
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
    document.getElementById("coderList").innerHTML +="<div id=showCoders><p class='showname'>"+coderElegida+"</p></div>"

)




  
    
    



    

    



    

    

    







<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 0faada810a3c3fea3b2989a8e583a1bb6a9b62bb
>>>>>>> c25c52706a1a33d0586ce1cf9df4ce36244b953e
>>>>>>> 1b407121924373e86d27bf8666b2b9fa829f8baf
=======


>>>>>>> 132d0a8124cb3c82116cd43a7428c862c3a50f68
