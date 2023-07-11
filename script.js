function calculate() { 
    const n1 = Number(document.getElementById("number1").value)
    const n2 = Number(document.getElementById("number2").value)
    const operadores = document.getElementById("select-counter").value
    const message = document.getElementById("result")

    let resu
    if (operadores === '+') {
        resu = '+'
    } else if (operadores === '-') {
        resu = '-'
    } else if (operadores === '*') {
        resu = '×'
    } else if (operadores === '/') {
        resu = '÷'
    } else if (operadores === '**') {
        resu = '^'
    }

    let resultado
    if (operadores === '+') {
        resultado = n1 + n2
    } else if (operadores === '-') {
        resultado = n1 - n2
    } else if (operadores === '*') {
        resultado = n1 * n2
    } else if (operadores === '/') {
        resultado = n1 / n2
    } else if (operadores === '**') {
        resultado = n1 ** n2
    }

    message.innerText = `${n1} ${resu} ${n2}: ${resultado}`
    }