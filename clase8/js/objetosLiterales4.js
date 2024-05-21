let auto = {
    marca: 'a',
    modelo: 'a',
    anio: 'a',
    color: 'a',
    posicion: 0,
    moverse: function(num) {
        var numero = parseInt(num);
        if (numero % 2 == 0) {
            this.posicion += 1;
        }
        else {
            this.posicion -= 1;
        }
        return this.posicion;
    }
}

console.log(auto.moverse(4))
console.log(auto.moverse(2))
console.log(auto.moverse(1))