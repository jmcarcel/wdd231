import { players } from "../data/players.mjs";

const cards = document.querySelector('#players');

function displayMembers(players) {
    players.forEach(player => {
        // Create a card for each player and append it to the DOM
        const card = document.createElement('div');
        card.classList.add('player-card');
        card.innerHTML = `
            <img class="myimage" src="../images/${player.image}" alt="${player.name}" width="300" height="200" loading="lazy">
            <h2 class="h2-card">${player.name}</h2>
            <p class="country"><i>${player.country}</i></p>
            <p class="description">${player.description}</p>
        `;
        cards.appendChild(card);
    });
}

function getPlayersData() {
    if (!players || players.length === 0) {
        console.error("Data is missing or malformed");
        return;
    }
    console.table(players); 
    displayMembers(players); 
}

getPlayersData();