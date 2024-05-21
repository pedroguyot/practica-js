//a.
let mensaje_1 = 'Ingresa un numero'
let numero_1 = prompt(mensaje_1)

let mensaje_2 = 'Ingresa otro numero'
let numero_2 = prompt(mensaje_2)

//b.
function multiplicar(a, b) {
    num1 = a
    num2 = b
    resultado = a*b
    return `El resultado de multiplicar ${num1} y ${num2} es: ${resultado}.`
}

console.log(multiplicar(numero_1,numero_2))