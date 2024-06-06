let queryString = window.location.search;

let urlParams = new URLSearchParams(queryString);

let personajeId = urlParams.get('id')

let infoPersonaje = {
    id: personajeId,
    nombre: '',
    status:'',
    especie:'',
    img:''

};

let idNumero = infoPersonaje.id

url = `https://rickandmortyapi.com/api/character/${idNumero}`

window.onload = function() {
    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        infoPersonaje.nombre = data.name;
        infoPersonaje.status = data.status;
        infoPersonaje.especie = data.species;
        infoPersonaje.img = data.image;
        
    })
}
console.log(infoPersonaje)



