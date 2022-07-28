'use strict'

function calcularOperador (number1, number2) {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const mais = document.getElementById('mais').value;
    const menos = document.getElementById('menos').value;
    const vezes = document.getElementById('vezes').value;
    const dividir = document.getElementById('dividir').value;
    const resultado = document.getElementById('resultado');
    
}

document.getElementById('calcular').addEventListener('click', calcularOperador);