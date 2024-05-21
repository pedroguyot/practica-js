//a.
let mensaje_1 = 'Ingresa tu nacionalidad'
let nacionalidad = prompt(mensaje_1)

let mensaje_2 = 'Cual es tu profesion?'
let profesion = prompt(mensaje_2)

let mensaje_3 = 'Cuantos km caminas por dia?'
let km = prompt(mensaje_3)

//b.
function filosofoHipster (nac, prof, km) {
    nacionalidad_respuesta = nac.toLowerCase()
    profesion_respuesta = prof.toLowerCase()

    if (nacionalidad_respuesta === 'argentino') {
        if (profesion_respuesta === 'musico') {
            if (km >= 2) {
                return 'Soy un filosofo hipster.'
            } else {
                return 'Aun no soy un filosofo hipster'
            }
        } else {
            return 'Aun no soy un filosofo hipster'
        }
    } else {
        return 'Aun no soy un filosofo hipster'
    }
}

console.log(filosofoHipster(nacionalidad, profesion, km))