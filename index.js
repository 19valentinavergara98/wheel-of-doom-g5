
function elegirCoders(){
    let listaCoders = [ {name:"LauraC",status:"alive"},
    {name:"Sandra",status:"alive"},
    {name:"Valentina",status:"alive"},
    {name:"Tamara",status:"alive"},
    {name:"Judith",status:"alive"},
    {name:"Helen",status:"alive"},
    {name:"Carmen",status:"alive"},
    {name:"Candy",status:"alive"},
    {name:"Gabrielle",status:"alive"},
    {name:"Yulilla",status:"alive"},
    {name:"Anna G",status:"alive"},
    {name:"Sonia",status:"alive"},
    {name:"Desirée",status:"alive"},
    {name:"Alisa",status:"alive"},
    {name:"Faby",status:"alive"},
    {name:"Ana C",status:"alive"},
    {name:"Joana",status:"alive"},
    {name:"Gracia",status:"alive"},
    {name:"Alexia",status:"alive"},
    {name:"Marisa",status:"alive"},
    {name:"Laura M",status:"alive"},
    {name:"Rosa",status:"alive"},
    {name:"Kristina",status:"alive"},
    ];

    let coderElegida = Math.floor(Math.random()*listaCoders.length);
    document.getElementById('startButton').innerHTML= coderElegida /*"<p>Nombre:</p><div class="mostrar"></div>"*/
    
}



