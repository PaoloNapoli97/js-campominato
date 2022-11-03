"use strict";

const campContainer = document.querySelector(".camp-container");
let classAdd = "";
let difficultyValue;
let bombs = [];

// Richiamo e modifica funzione a seconda esigenze durante il click bottone

document.getElementById('play').addEventListener('click', function(){
    const difficulty = document.getElementById('difficulty').value;
    if ( difficulty == "easy"){
        difficultyValue = 100;
        classAdd = "camp-cell-10";
        camp(difficultyValue);
        bombGen(difficultyValue);
    }
    else if ( difficulty == "normal"){
        difficultyValue = 81;
        classAdd = "camp-cell-9";
        camp(difficultyValue);
        bombGen(difficultyValue);
    }
    else if ( difficulty == "hard"){
        difficultyValue = 49;
        classAdd = "camp-cell-7";
        camp(difficultyValue);
        bombGen(difficultyValue);
    }
})

function camp(campSize){
    campContainer.innerHTML = "";
    for (let i = 1; i <= campSize; i++) {
        const campCell = document.createElement("div");
        campCell.innerHTML = i;
        campCell.classList.add(classAdd);
        campCell.addEventListener("click", function onClick(){
            console.log(this);
            this.classList.add("cell-click");
                for(let j = 0; j < bombs.length; j++) {
                    if( i === bombs[j]){
                        this.classList.add("cell-bomb");
                        this.removeEventListener('click', onClick());
                    }
                }
        })

        campContainer.append(campCell);
    }
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function bombGen(difficultyValue){
    bombs = [];
    let n = 1;
    while ( n <= 16){
        let token;
        // Genero il numero
        token = random(1, difficultyValue);
        if(bombs.indexOf(token) === -1) bombs.push(token)
        n++;
    }
    console.log(bombs);
}