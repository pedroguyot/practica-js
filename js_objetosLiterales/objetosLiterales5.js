let ironMan = {
    nombre: 'Iron Man',
    equipo: 'Avengers',
    poderes: ['Volar', 'Lanzar misiles', 'Disparar laser'],
    energia: 100,
    getPoder: function(num) {
        var numero = parseInt(num)
        if (numero + 2 <= 2) {
            this.energia -= 10;
        }

        return `Poder Elegido de ${this.nombre}: ${this.poderes[numero]}. Energia restante: ${this.energia}.`
    }
}

let hulk = {
    nombre: 'Hulk',
    equipo: 'Avengers',
    poderes: ['Aplastar', 'Gritar', 'Golpear'],
    energia: 100,
    getPoder: function(num) {
        var numero = parseInt(num)
        if (numero + 2 <= 2) {
            this.energia -= 10;
        }

        return `Poder Elegido de ${this.nombre}: ${this.poderes[numero]}. Energia restante: ${this.energia}.`
    }
}

console.log(ironMan.getPoder(0))
console.log(ironMan.getPoder(1))
console.log(hulk.getPoder(0))
console.log(hulk.getPoder(2))
console.log(ironMan.getPoder(5)) //Por condicion, ese valor numerico no es valido por el tamano de la lista. 