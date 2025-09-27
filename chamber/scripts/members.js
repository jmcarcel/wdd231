const companies = 'https://github.com/jmcarcel/wdd231/blob/main/chamber/data/members.json';

const cards = document.querySelector('#companies');

async function getMembers() {
    const response = await fetch(companies);
    const data = await response.json(); // parse the JSON data
    // console.table(data.members);
    displayMembers(data.members);
}

getMembers();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let information = document.createElement('p');
        let url = document.createElement('a');
        let number = document.createElement('p');

        name.textContent = `${member.name}`;
        information.textContent = `${member.information}`;
        url.textContent = `WEBSITE: ${member.websiteurl}`;
        number.textContent = `PHONE: ${member.phonenumber}`;
        
        card.appendChild(name);
        card.appendChild(information);
        card.appendChild(url);
        card.appendChild(number);

        cards.appendChild(card);
    });
}