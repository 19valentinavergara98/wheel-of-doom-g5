
let startButton=document.querySelector("#startButton");
let resetButton=document.querySelector("#resetButton");
let addButton=document.querySelector("#addcoder");
 
startButton.addEventListener("click",elegirCoders);
resetButton.addEventListener("click",resetear);
addButton.addEventListener("click",generarGrupo);



let listaCoders = [ "LauraC",
    "Sandra",
    "Valentina",
    "Tamara",
    "Judith",
    "Helen",
    "Carmen",
    "Candy",
    "Gabrielle",
    "Yulilla",
    "Anna G",
    "Sonia",
    "Desirée",
    "Alisa",
    "Faby",
    "Ana C",
    "Joana",
    "Gracia",
    "Alexia",
    "Marisa",
    "Laura M",
    "Rosa",
    "Kristina",
    ];
function elegirCoders(){

   
    let coderElegida = listaCoders[Math.floor(Math.random()*listaCoders.length)];
    document.getElementById('startButton').innerHTML=' <section class="mostrarnombre"><p>nombre:</p></section>'+coderElegida;
    

}

function resetear(){

    
}







