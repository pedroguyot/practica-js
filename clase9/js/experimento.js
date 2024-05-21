//b.
let mensaje_1 = 'Cual es su nombre?'
let nombre = prompt(mensaje_1)
console.log(nombre)

//c.
let mensaje_2 = 'Cual es su edad?'
let edad = prompt(mensaje_2)
console.log(edad)

//d.
let mensaje_3 = 'Te gustan los deportes?'
let fanDeportes = prompt(mensaje_3)
console.log(fanDeportes)

//e.
let mensaje = `Muchas gracias ${nombre} por responder nuestrar preguntas` ;
alert(mensaje);

//f.
 let usuario = {
    nombre_usuario: nombre,
    edad_usuario: edad,
    deportistaProfesional: function () {
        respuesta_fanDeportes = fanDeportes.toLowerCase()
        if (fanDeportes === 'si') {
            return 'Si, soy fan de los deportes';
        } else {
            return 'No soy tan fan aun de los deportes.';
        }
    }

 }

 console.log(usuario.deportistaProfesional())