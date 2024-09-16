"use strict";

function fetchData() {// obtiene los datos de la API
    fetch("https://api.disneyapi.dev/character") //función fetch para hacer una solicitud HTTP a la url
        .then(resp => resp.json()) //para convertir a objeto
        .then(data => {
            console.log(data);
            displayData(data.data.slice(13, 27)); //seleccioneé solo 13 personajes , la API devuelve los personajes en data y no en results
        })
        .catch(err => console.log(err)); //por si ocurre algún error se captura
}

// Función para mostrar los datos en formato de card
function displayData(data) {
    let cardContainer = document.getElementById('card-container');//Traemos el elemento de HTML y lo asignamos a la variable cardContainer .// 
    //Sirve como contenedor para las crds de personajes.//
   

data.forEach(character => { //recorremos el array de personajes y por cada personaje creamos una card
        let card = document.createElement('div');//se crea un nuevo elemento  div  y se asigna a la variable  card 
        card.className = 'card';
        card.innerHTML = ` 
            <h2>Nombre: ${character.name}</h2>
            <h3>Película: ${character.films}</h3>
            <h4>Televisión: ${character.tvShows}</h4>
            <img src="${character.imageUrl}" alt="${character.name}"/> 
        `;
        cardContainer.appendChild(card);//se añade el div card que contiene la información del personaje al contenedor  cardContainer .
    });
}

fetchData(); //función que llena el array data