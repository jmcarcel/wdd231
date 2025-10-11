document.getElementById('timestamp').value = new Date().toISOString();

const npModal = document.getElementById('npModal');
const closeModal = document.getElementById('closeNpModal');
closeModal.addEventListener('click', () => {
    npModal.close();
});

const npButton = document.querySelector("#np-learn-more");

npButton.addEventListener("click", () => {
    npModal.showModal();
});

//

const bronzeModal = document.getElementById('bronzeModal');
const closeBronzeModal = document.getElementById('closeBronzeModal');

bronzeModal.addEventListener('click', () => {
    bronzeModal.close();
});

const bronzeButton = document.querySelector("#bronze-learn-more");

bronzeButton.addEventListener("click", () => {
    bronzeModal.showModal();
});

//

const silverModal = document.getElementById('silverModal');
const closeSilverModal = document.getElementById('closeSilverModal');

silverModal.addEventListener('click', () => {
    silverModal.close();
});

const silverButton = document.querySelector("#silver-learn-more");

silverButton.addEventListener("click", () => {
    silverModal.showModal();
});

//

const goldModal = document.getElementById('goldModal');
const closeGoldModal = document.getElementById('closeGoldModal');

goldModal.addEventListener('click', () => {
    goldModal.close();
});

const goldButton = document.querySelector("#gold-learn-more");

goldButton.addEventListener("click", () => {
    goldModal.showModal();
});