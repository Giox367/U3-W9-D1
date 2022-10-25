"use strict";
class Giocatore {
    constructor(nome, numero) {
        this.nome = nome;
        this.numero = numero;
    }
}
function compareNumbers() {
    let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
    let nameInput1 = document.querySelector("#firstPlayer").value;
    let nameInput2 = document.querySelector("#secondPlayer").value;
    let numberInput1 = document.querySelector("#firstNumber").value;
    let getNumber1 = parseInt(numberInput1);
    let numberInput2 = document.querySelector("#secondNumber").value;
    let getNumber2 = parseInt(numberInput2);
    let giocatore1 = new Giocatore(nameInput1, getNumber1);
    console.log(giocatore1);
    let giocatore2 = new Giocatore(nameInput2, getNumber2);
    console.log(giocatore2);
    console.log(randomNumber);
    let risultato = document.querySelector("#result");
    if (randomNumber === getNumber1) {
        risultato.innerHTML = `${giocatore1.nome} ha indovinato!`;
    }
    else if (randomNumber === getNumber2) {
        risultato.innerHTML = `${giocatore2.nome} ha indovinato!`;
    }
    else if (Math.abs(randomNumber - getNumber1) > Math.abs(randomNumber - getNumber2)) {
        risultato.innerHTML = `${giocatore2.nome} si è avvicinato di più alla soluzione`;
    }
    else
        risultato.innerHTML = `${giocatore1.nome} si è avvicinato di più alla soluzione`;
}
let btn = document.querySelector("#verify");
btn.addEventListener("click", compareNumbers);
