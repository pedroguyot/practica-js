let mensaje_1 = 'Ingresa un numero'
let num_1 = prompt(mensaje_1)

let mensaje_2 = 'Ingresa otro numero'
let num_2 = prompt(mensaje_2)

if (num_1 > num_2) {
    texto = `${num_1} es el numero mayor.`
} else if (num_1 === num_2) {
    texto = 'Los numeros son iguales'
} else {
    texto = `${num_2} es el numero mayor.`
}

document.querySelector('.respuesta').innerText = texto