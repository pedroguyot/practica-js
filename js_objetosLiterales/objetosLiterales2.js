let misDatos = {
    nombre: 'Pedro',
    apellido: 'Guyot',
    dni: '45610842',
    edad: 20,
    comidasFavoritas: ['Milanesa', 'Fideos', 'Carne'], //Tipo de dato array o lista
    saludar: function() {
        return `Hola mi nombre es ${this.nombre} ${misDatos.apellido} y tengo ${misDatos.edad}. Mi primer comida favorita es ${misDatos.comidasFavoritas[0]}`
    }
}

console.log(misDatos.saludar())