"use strict";
const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");
const addButton = document.querySelector("#addButton");

startButton.addEventListener("click", startWheel);
resetButton.addEventListener("click", reset);
addButton.addEventListener("click", addCoder);

let listaCoders = [ {name:"LauraCa",status:"alive"},
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
{name:"Laura C",status:"alive"},
{name:"Rosa",status:"alive"},
{name:"Kristina",status:"alive"},
];

function startWheel() {
    const listCodersAlive = [];
    listaCoders.forEach((coder) => {
      if (coder.status === "alive") {
        listCodersAlive.push(coder);
      }
    });
}

if (listCodersAlive.length <= 0) {
    showResultMessage("No one left! Please reset");
    return;
  }
  const selectedCoder = selectCoder(listCodersAlive);
  showResultMessage(selectedCoder.name);
  updateList(selectedCoder, "dead");
  updateCoderCard(selectedCoder);

  function selectCoder(listaCoders) {
    const selectedCoder = listaCoders[Math.floor(Math.random() * array.length)];
    return selectedCoder;
  }

  function updateCoderCard(coder) {
    const coderCard = document.querySelector(`#${coder.name}`);
    coderCard.className = `${coder.status}`;
  }
  

  function showCoders() {
    listaCoders.forEach((coder) => {
      createCoderArticle(coder);
    });
  }
  
  function createCoderArticle(coder) {
    const coderListSection = document.querySelector("#coderList");
    const coderArticle = document.createElement("article");
    const coderName = document.createElement("p", `${coder.name}`);
    coderName.innerHTML += `${coder.name}`;
    coderArticle.setAttribute("class", `${coder.status}`);
    coderArticle.setAttribute("id", `${coder.name}`);
    coderArticle.appendChild(coderName);
    coderListSection.appendChild(coderArticle);
  }
