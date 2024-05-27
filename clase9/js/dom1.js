//a.
let mensaje_1 = 'Bienvenidos a mi sitio.'
alert(mensaje_1)

//b.
let mensaje_2 = 'Estas seguro de querer avanzar?';
let resultado = confirm(mensaje_2);
let saludo = document.querySelector('h2');

if (resultado) {
    saludo.innerHTML = 'Que alegria que quieras continuar tu visita.'

    //c.
    let mensaje_2 = 'Ingrese su nombre'
    let nombre = prompt(mensaje_2);

    //d.
    let bienvenida = document.querySelector('h1');
    bienvenida.innerHTML = `Bienvenido ${nombre}`

    //e.
    let mensaje_3 = 'Cuantos años tenes?'
    let edad = prompt(mensaje_3);
    let container = document.querySelector('.container-general')


    if (edad > 17) {
        
    } else {
        container.style.display = 'none' //Hace que desaparezca una
        denegado.style.display = 'block' //Hace que aparezca la otra
    }
} 


else {
    saludo.innerHTML = 'Lamentamos que no quieras continuar con tu visita.'
}

//Me quede en el punto e. .