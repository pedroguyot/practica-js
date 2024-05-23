let dia = prompt('Que dia es hoy?').toLowerCase()
let hora = prompt('Que hora es? Usa la escritura de 24 hrs')

let dias_habiles = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']

for (i = 0; i <dias_habiles.length; i++) {
    if (dia === dias_habiles[i]) {
        if (hora >= 10 && hora <= 15) {
            texto = 'Bien! Todavia estamos a tiempo de llegar!'
        } 
    } else {
        texto = 'Uf... No llegamos'
    }
} 

document.querySelector('.respuesta').innerText = texto