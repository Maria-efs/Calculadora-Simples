'use strict'

const number1 = document.getElementById('number1').value;
const number2 = document.getElementById('number2').value;
const resultado = document.getElementById('resultado');

function somar (number1, number2){
    resultado = parseInt(number1) + parseInt(number2)
}
document.getElementById('mais').addEventListener('click', somar);