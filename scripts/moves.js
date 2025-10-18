const moves = 'https://jmcarcel.github.io/wdd231/data/moves.json';

const cards = document.querySelector('#moves');

async function getMoves() {
    const response = await fetch(moves);
    const data = await response.json(); // parse the JSON data
    console.log(data.pieces);
    displayMoves(data.pieces);
}
getMoves();

const displayMoves = (pieces) => {
    pieces.forEach((piece) => {
        let card = document.createElement('section');
        let id = document.createElement('h2');
        let movement = document.createElement('div');

        id.textContent = `${piece.name}`;
        
        for (const key in piece.movement) {
            const p = document.createElement("p");
            let value = piece.movement[key];
            if (Array.isArray(value)) value = value.join(",");
            p.innerHTML = `<strong>${key}:<strong> ${value}`;
            movement.appendChild(p);
        }
        
        card.appendChild(id);
        card.appendChild(movement);

        cards.appendChild(card);
    });
}