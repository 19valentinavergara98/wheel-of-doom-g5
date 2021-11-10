
let startButton=document.querySelector("#startButton");
let resetButton=document.querySelector("#resetButton");
let addButton=document.querySelector("#addcoder");
 
startButton.addEventListener("click",elegirCoders);
resetButton.addEventListener("click",resetear);
addButton.addEventListener("click",generarGrupo);



let listaCoders = [ {name:"LauraC"},
    {name:"Sandra"},
    {name:"Valentina"},
    {name:"Tamara"},
    {name:"Judith"},
    {name:"Helen"},
    {name:"Carmen"},
    {name:"Candy"},
    {name:"Gabrielle"},
    {name:"Yulilla"},
    {name:"Anna G"},
    {name:"Sonia"},
    {name:"Desirée"},
    {name:"Alisa"},
    {name:"Faby"},
    {name:"Ana C"},
    {name:"Joana"},
    {name:"Gracia"},
    {name:"Alexia"},
    {name:"Marisa"},
    {name:"Laura M"},
    {name:"Rosa"},
    {name:"Kristina"},
    ];
function elegirCoders(){

   
    let coderElegida = listaCoders[Math.floor(Math.random()*listaCoders.length)];
    document.getElementById('startButton').innerHTML=' <section class="mostrarnombre"><p>nombre:</p></section>'+coderElegida;
    

}

function resetear(){

    
}







