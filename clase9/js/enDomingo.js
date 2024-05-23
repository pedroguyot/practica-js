let mensaje_1 = 'Que dia es hoy?'
let respuesta = prompt(mensaje_1)
let respuesta_minusc = respuesta.toLowerCase()

if (respuesta_minusc === 'domingo') {
    mensaje = 'Pongamos la olla, hoy se comen pastas!';
} else {
    mensaje = 'Mejor lo dejamos para el domingo.';
}

document.querySelector('.respuesta').innerText = mensaje