const moves = 'https://jmcarcel.github.io/wdd231/data/moves.json';

const cards = document.querySelector('#moves');

async function getMoves() {
    const response = await fetch(moves);
    const data = await response.json(); // parse the JSON data
    console.table(data.pieces);
    displayMoves(data.pieces);
}
getMoves();

const displayMoves = (pieces) => {
    pieces.forEach((piece) => {
        let card = document.createElement('section');
        let id = document.createElement('h2');
        let movement = document.createElement('p');
        let url = document.createElement('a');
        let number = document.createElement('p');

        id.textContent = `${piece.name}`;
        movement.textContent = `${piece.movement}`;
        url.href = member["websiteurl"];
        url.textContent = "Visit website";
        number.textContent = `PHONE: ${member["phonenumber"]}`;
        
        card.appendChild(id);
        card.appendChild(movement);
        card.appendChild(url);
        card.appendChild(number);

        cards.appendChild(card);
    });
}