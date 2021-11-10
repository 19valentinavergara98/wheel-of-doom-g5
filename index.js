
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









