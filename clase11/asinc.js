location.href //Nos devuelve toda nuestra url

location.reload() //Nos permite recargar la pagina

//--------------------

location.search //Nos devuelve la querystring entera

let query = new URLSearchParams(location.search) //Con esto podemos acceder a lso datos de nuestro QueryString.
    query.has('search_query'); //Revisa si se encuentra el parametro en el querystring y retorna un booleano.
    query.get('search_query'); //Nos devuelve el valor del parametro buscado

//--------------------

sessionStorage.setItem('nombre', 'Dario'); //Este metodo crea nuevos atriburos en nuestro storage, y asigna valores para ellos. El primero es el nombre de la clave, y el segundo el valor. 

sessionStorage.getItem('nombre'); //Le pedimos que nos de el valor de esa clave.

sessionStorage.removeItem('nombre'); //Elimina la clave nombre

sessionStorage.clear(); //Borra todo el contenido que hayamos almacenado en storage

//Estructura para pedir nombre de usuario una sola vez, guardar su nombre en local storage y saludarlo.

window.addEventListener('load', function() {

    if (this.localStorage.getItem('nombreUsuario') == null) {  //Si el local storage no tiene ningun valor para la variable nombreUsuario...
        let nombre = prompt('Dinos tu nombre');
        this.document.querySelector('.bienvenida').innerHTML = 'Hola ' + nombre

        this.localStorage.setItem('nombreUsuario', nombre); //Lo saludo arriba y ahora guardo la viariable en la local sotrage

    } else { //Si ya hay algo en la local storage...
        let nombre = localStorage.getItem('nombreUsuario'); //Quiero que eso que ya hay se guarde en la variable nueva 'nombre'
        this.document.querySelector('.bienvenida').innerHTML = 'Hola ' + nombre
    }

    console.log(localStorage)

})

//La info que haya en el local storage se va a mantener para cualquier pestana que yo abra. Solo se borrara en el modo incognito. Local storage es por usuario (por navegador). Si usaba session storage y cerraba el navegador, la informacion se hubiese perdido y si volvia a abrir la pagina con un uevo navegador, me hubiese vuelto a pedir el nombre. 
// Otro consejo: En storage solo podemos guardar texto, no arrays ni objetos literales. Antes, hay que procesar la data en un json. 