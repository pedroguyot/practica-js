let url = 'https://rickandmortyapi.com/api/character'

window.onload = function() {
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            const characterList = document.querySelector('.characterList');
            
            let characters = '';

            for (let i = 0; i < data.results.length; i++) {
                personaje = data.results[i];
                characters += `
                    <article>
                        <img src="${personaje.image}" alt="${personaje.name}">
                        <p>Name: ${personaje.name}</p>
                        <p>Status: ${personaje.status}</p>
                    </article>
                `;
            
            }

            characterList.innerHTML = characters;
            

        })
        .catch(function(error){
            console.log('Error:' + error);
        })

}