"use strict";
const titreVille = document.querySelector("h1");
const tabAffichage = document.querySelector("#board");

//const recupStation = fetch(`http://transport.opendata.ch/v1/stationboard?station=Aarau&limit=10`)
//.then((res) => res.json()
//.then((recupStation) => console.log(recupStation)));

const recuperationDonnes = ((ville, nombre) => {

fetch (`http://transport.opendata.ch/v1/stationboard?station=${ville}&limit=${nombre}`)
.then ((resultat) => {  
    return resultat.json() })
.then((data) => {
    data.stationboard.forEach((element) => affichageDansBoard(element));
    titreVille.innerHTML = data.station.name;
})
})

recuperationDonnes("Tolochenaz", 10)
    
const affichageDansBoard = (villeDepart) =>{

const time = new Date(villeDepart.stop.departure);
const minute = time.getMinutes().toString().padStart(2, '0');
const heure = time.getHours();

const html = `<article>
    <div class="time">${heure + ":" + minute}</div>
    <div class="category" data-category="${villeDepart.category}">${villeDepart.category}</div>
    <div class="destination">${villeDepart.to}</div>
</article>`;

tabAffichage.insertAdjacentHTML("beforeend", html);
}
