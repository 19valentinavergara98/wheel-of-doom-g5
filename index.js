
let listaCoders = ["Sandra", "Valentina", "Laura", "Rosa", "Tamara", "Judith", "Helen", "Carmen", "Candy", "Gabrielle", "Yulilla", "Anna G",
    "Sonia", "Desirée", "Alisa", "Faby",
    "Ana C", "Joana", "Gracia", "Alexia", "Marisa", "Laura M", "Rosa", "Kristina"];
    
    listaCoders.forEach(coderElegida =>

        document.getElementById("coderList").innerHTML +="<div id=showCoders><p id=textoCarta>"+coderElegida+"</p></div>"
    
    )


// Declarar variable que alude al botón
const startButton = document.getElementById('startButton');
//Crear el eventListener "boton start, tipo click"
startButton.addEventListener("click", elegirCoders);
//Variable que indica
const showCoders = document.getElementById('nombreElegido');
//Crear la función que nos dará el nombre aleatorio
function elegirCoders() {

    let position = Math.floor(Math.random() * listaCoders.length)
    let coderElegida = listaCoders.splice(position,1);

    showCoders.innerHTML = coderElegida[0];

    // borra la lista actual 
    document.getElementById("coderList").innerHTML = "";

    // vuelve a dibujar la lista
    listaCoders.forEach(coderElegida =>

        document.getElementById("coderList").innerHTML +="<div id=showCoders><p id=textoCarta>"+coderElegida+"</p></div>"
    
    )
    /* function agruparCoders(){
        let grupo = listaCoders.pop(coderElegida);
        document.getElementById("coderscard").innerHTML += "<div id=showCoders><p id=textoCarta>"+grupo+"</p></div>";
        }
        agruparCoders(); */
   



}


  
    
    



    

    



    

    

    



