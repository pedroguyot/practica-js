// <a href='http://www.peliculas.html?id=35'> Fight Club </a> //En el HTML, puede servir para cuando el usuario clickea justo ahi. 

//Enviar datos a traves de un formulario

<form action='resultados.html' method='GET'>
    <input type='text' name='busdcador' value=''>
        <button type='submit'>Enviar</button>
    </input>
</form>

//Estructura basica para obtener el queryString
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

queryStringObje.get('buscador');

//Para convertir los datos de un array o un objeto literal y poder trabajar con el storage, hay dos metoods:
//1) Stringify

let = miAutito = {
    marca: 'Fiat',
    modelo: 1985,
    color: 'verde',
};

let autoToString = JSON.stringify(miAutito) //---> '{'marca':'Fiat', 'modelo': 1985, 'color': 'Verde'}'
localStorage.setItem('autitoEnLocal', autoToString) //LO guardo en storage

//Si quiero recuperar el dato, uso parse

let recuperoStorage = localStorage.gerItem('alumnosEnLocal');
let alumnosRecuperados = JSON.parse(RecuperoStorage); 

//2) Parse --> Es para recuperar el dato
let autoJson = "{'marca':'Fiat', 'modelo': 1985, 'color': 'Verde'}"

JSON.parse(autoJson); //Vuelve el dato a su objeto literal

// {   'marca': 'Fiat',
//    'modelo': 1985,
//    'color': 'Verde',
//    }
