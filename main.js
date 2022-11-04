"use strict";

const campContainer = document.querySelector(".camp-container");
let points = document.getElementById("point").innerHTML = "Premi play per giocare!";
let difficultyValue;
let bombs = [];

// Richiamo e modifica funzione a seconda esigenze durante il click bottone

document.getElementById('play').addEventListener('click', function(){
    const difficulty = document.getElementById('difficulty').value;
    if ( difficulty == "easy"){
        difficultyValue = 100;
        camp(difficultyValue);
        bombGen(difficultyValue);
    }
    else if ( difficulty == "normal"){
        difficultyValue = 81;
        camp(difficultyValue);
        bombGen(difficultyValue);
    }
    else if ( difficulty == "hard"){
        difficultyValue = 49;
        camp(difficultyValue);
        bombGen(difficultyValue);
    }

    //  Correzione in classe \Codice Funzionante

    const cells = document.querySelectorAll('.camp-cell')
    const numberClicked = [];
    let gameover = false;
    for (let i = 0; i< cells.length; i++){
        cells[i].addEventListener("click", function (){

            if (gameover === false){

                const cellNumber = Number( this.innerHTML );

                if (bombs.includes(cellNumber) ){
                    this.classList.add('cell-bomb');
                    gameover = true;
                    points = document.getElementById("point").innerHTML = `Hai perso! Il tuo punteggio é: ${numberClicked.length}`;
                } else if ( numberClicked.includes(cellNumber) === false) {
                    this.classList.add('cell-click');
                    numberClicked.push(cellNumber);
                    points = document.getElementById("point").innerHTML = `Il tuo punteggio é: ${numberClicked.length}`;
                }


                if (numberClicked.length === difficultyValue - bombs.length){
                    points = document.getElementById("point").innerHTML = `Hai vinto! Il tuo punteggio é: ${numberClicked.length}`;
                    gameover = true;
                }
                console.log(numberClicked);
            }

            if ( gameover){
                for (let i = 0; i < bombs; i++){
                    document.querySelector(`.camp-cell:nth-child(${bombs[i]})`).classList.add('cell-bomb');
                }
            }

        });
    }
})



// funzioni

function camp(campSize){
    campContainer.innerHTML = "";
    let p = 0;
    for (let i = 1; i <= campSize; i++) {

        const campCell = document.createElement("div");
        campCell.innerHTML = i;
        campCell.classList.add('camp-cell');
        campCell.style = `--colNumber: ${Math.sqrt(campSize)}`;

        campContainer.append(campCell);

        //  Mio codice non funzionale


    //     let gameover = false;
    //     if (gameover){
    //         return
    //     }
    //     campCell.addEventListener("click", function (){

    //         console.log(this);
    //             if (campCell.classList.contains("cell-click")){
    //                 p = p - 1;
    //             }
    //             this.classList.add("cell-click");
    //             points = document.getElementById("point").innerHTML = `Il tuo punteggio é: ${[p = p + 1]}`;
    //                 for(let j = 0; j < bombs.length; j++) {
    //                     if( i === bombs[j]){
    //                         gameover = true;
    //                         points = document.getElementById("point").innerHTML = `Hai perso! Il tuo punteggio é: ${[p = p - 1]}`;
    //                         this.classList.add("cell-bomb");

    //                     }
    //                 }
    //     })
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
        if(bombs.indexOf(token) === - 1) bombs.push(token)
        n++;
    }
    console.log(bombs);
}