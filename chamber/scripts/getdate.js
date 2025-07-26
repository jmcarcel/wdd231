const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
lastModified.innerHTML = `<span>${document.lastModified}</span>`;