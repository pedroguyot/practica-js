let auto = {
    marca: 'a',
    modelo: 'a',
    anio: 'a',
    color: 'a',
    posicion: 0,
    avanzar: function(num) {
        var numero = parseInt(num);
        if (num % 2 == 0) {
            this.posicion += 1;
        }
        return this.posicion;
    },
    retroceder: function(num) {
        var numero = parseInt(num);
        if (num % 2 != 0) {
            this.posicion -= 1;
        }
        return this.posicion;
    }
}

var_1 = auto.avanzar(3)
console.log(auto.posicion)