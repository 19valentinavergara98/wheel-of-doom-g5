
let listaCoders = ["Sandra", "Valentina", "Laura", "Rosa"];

    // Declarar variable que alude al botón
    const startButton = document.getElementById('startButton');
    //Crear el eventListener "boton start, tipo click"
    startButton.addEventListener("click", elegirCoders);
    //Variable que indica
    const showCoders = document.getElementById('showCoders');
    //Crear la función que nos dará el nombre aleatorio
    function elegirCoders(){

    let coderElegida = listaCoders[Math.floor(Math.random()*listaCoders.length)];

    showCoders.innerHTML= coderElegida;
    
    }
    

    

    

    








