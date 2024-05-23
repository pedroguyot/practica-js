let mensaje = 'Ingresa un numero'
let num = prompt(mensaje)

if (num > 0) {
    texto = `El numero ${num} es positivo.`
} else if (num == 0) {
    texto = `El numero ${num} es cero.`
} else {
    texto = `El numero ${num} es negativo.`
}

document.querySelector('.respuesta').innerText = texto