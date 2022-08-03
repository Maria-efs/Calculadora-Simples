'use strict'

function somar (){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const resultado = document.getElementById('resultado')

    const valor = parseInt(number1) + parseInt(number2);
    resultado.textContent = valor
}

function subtrair (){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const resultado = document.getElementById('resultado')

    const valor = parseInt(number1) - parseInt(number2);
    resultado.textContent = valor
}

function multiplicar(){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const resultado = document.getElementById('resultado')

    const valor = parseInt(number1) * parseInt(number2);
    resultado.textContent = valor
}

function divisao (){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const resultado = document.getElementById('resultado')

    const valor = parseInt(number1) / parseInt(number2);
    resultado.textContent = valor
}

mais.addEventListener('click', somar)
menos.addEventListener('click', subtrair)
vezes.addEventListener('click', multiplicar)
dividir.addEventListener('click', divisao)