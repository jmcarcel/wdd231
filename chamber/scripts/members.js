
const companies = 'https://github.com/jmcarcel/wdd231/blob/main/chamber/data/members.json';

const cards = document.querySelector('#companies');

async function getMembers() {
    const response = await fetch(companies);
    const data = await response.json(); // parse the JSON data
    // console.table(data.members);
    displayMembers(data.members);
}

getMembers();
