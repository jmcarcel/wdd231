import { places } from "../data/places.mjs";

const cards = document.querySelector('#bussiness');

function displayMembers(places) {
    places.forEach(place => {
        // Create a card for each place and append it to the DOM
        const card = document.createElement('div');
        card.classList.add('place-card');
        card.innerHTML = `
            <img class="myimage" src="..chamber/images/${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
            <h2 class="h2-card">${place.name}</h2>
            <p class="address"><i>${place.address}</i></p>
            <p class="description">${place.description}</p>
        `;
        cards.appendChild(card);
    });
}

function getBussinessData() {
    if (!places || places.length === 0) {
        console.error("Data is missing or malformed");
        return;
    }
    console.table(places); // Log the places data for debugging
    displayMembers(places); // Display the places data in the DOM
}

getBussinessData();