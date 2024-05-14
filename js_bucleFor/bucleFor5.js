let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

//a.
for (let i=0; i<got.length; i++) {
    let nombre = got[i].nombre;
    let apellido = got[i].apellido;
    
    console.log(`Hola ${nombre} ${apellido} criatura viajera!`)
}

console.log('--------------------------------------------------------')

//b. 
for (let i=0; i<got.length; i++) {
    let nombre = got[i].nombre;
    let apellido = got[i].apellido;
    let ciudad = got[i].ciudad;
    
    console.log(`Soy ${nombre} ${apellido} de la ciudad ${ciudad}`)
}