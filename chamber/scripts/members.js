const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
lastModified.innerHTML = `<span>${document.lastModified}</span>`;

const companies = '';

const cards = document.querySelector('#cards');

async function getMembers() {
    const response = await fetch(companies);
    const data = await response.json(); // parse the JSON data
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();