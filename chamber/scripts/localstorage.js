const paragraph = document.getElementById('visitmessage');
const lastvisit = localStorage.getItem('lastvisit');
const now = Date.now();
let message = "";

if (!lastvisit) {
    // First visit
    message = "Welcome! Let us know if you have any questions.";
} else {
    const millisecondsinaday = 24 * 60 * 60 * 1000;
    const dayssincelastvisit = Math.floor((now - parseInt(lastvisit)) / millisecondsinaday);

    if (dayssincelastvisit < 1) {
        message = "Back so soon! Awesome!";
    } else if (dayssincelastvisit === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${dayssincelastvisit} days ago.`;
    }
}

// Update paragraph content
paragraph.textContent = message;

// Store current date as last visit
localStorage.setItem('lastvisit', now);