let respuesta = confirm('Queres aplicar dark mode en el sitio?')
let texto = document.querySelector('.respuesta');
let body = document.body;

if (respuesta) {
    body.style.backgroundColor = '#444'
    texto.style.color = '#fff'
    mensaje = 'Dark Mode activado'
} else {
    mensaje ='Ok. Lo activo en otro momento.'
}

document.querySelector('.respuesta').innerText = mensaje
