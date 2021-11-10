
let startButton=document.querySelector("#startButton");
let resetButton=document.querySelector("#resetButton");
let addButton=document.querySelector("#addcoder");
 
startButton.addEventListener("click",elegirCoders);
resetButton.addEventListener("click",resetear);
addButton.addEventListener("click",generarGrupo);



let listaCoders = [ {name:"LauraC",status:"viva"},
    {name:"Sandra",status:"viva"},
    {name:"Valentina",status:"viva"},
    {name:"Tamara",status:"viva"},
    {name:"Judith",status:"viva"},
    {name:"Helen",status:"viva"},
    {name:"Carmen",status:"viva"},
    {name:"Candy",status:"viva"},
    {name:"Gabrielle",status:"viva"},
    {name:"Yulilla",status:"viva"},
    {name:"Anna G",status:"viva"},
    {name:"Sonia",status:"viva"},
    {name:"Desirée",status:"viva"},
    {name:"Alisa",status:"viva"},
    {name:"Faby",status:"viva"},
    {name:"Ana C",status:"viva"},
    {name:"Joana",status:"viva"},
    {name:"Gracia",status:"viva"},
    {name:"Alexia",status:"viva"},
    {name:"Marisa",status:"viva"},
    {name:"Laura M",status:"viva"},
    {name:"Rosa",status:"viva"},
    {name:"Kristina",status:"viva"},
    ];
function elegirCoders(){

   
    let coderElegida = listaCoders[Math.floor(Math.random()*listaCoders.length)];
    document.getElementById('startButton').innerHTML=' <section class="mostrarnombre"><p>nombre:</p></section>'+coderElegida;
    

}

function resetear(){

    
}







