// Elements
let noButton = document.getElementById('no');
let yesButton = document.getElementById('yes');
let catGifContainer = document.getElementById('catGif');
let noResponseContainer = document.getElementById('noResponse');

// Predefined lists for gifs and responses to encourage him to say YES
let gifs = [
    "https://media.giphy.com/media/10d3Q4pPHk7Pq0/giphy.gif", // Sad cat
    "https://media.giphy.com/media/l4FGrD4K54iWm0QEK/giphy.gif", // Grumpy cat
    "https://media.giphy.com/media/3o6gE5pXwwzHD9x5nS/giphy.gif", // Facepalm cat
    "https://media.giphy.com/media/VwXyYY2Aq7TzW/giphy.gif", // Screaming cat
    "https://media.giphy.com/media/xT5LMBHe5kff6pt1Nc/giphy.gif"  // Crying cat
];

let noResponses = [
    "Why you gotta be like that? 😿 Try again, I know you'll say YES! 💕",
    "Oops, my heart just broke! 😢 Can you click YES? I’ll be so happy! 💖",
    "Aww, you’re making me sad! 😔 Come on, click YES for a cute date with me! 💝",
    "I’m not giving up! 😜 Click YES, or I'll have to send more cute gifs! 🐱💘",
    "Come on, don’t be shy! 😽 Click YES, and I promise it’ll be amazing! 💕"
];

// Function to move the No button to a random location (not for making it too hard)
function moveNoButton() {
    let randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Random X coordinate
    let randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Random Y coordinate
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Handle "Yes" button click
yesButton.addEventListener('click', function() {
    alert('YES!!! 💖💘 You just made my day!!! 😍🎉 Let\'s have the best Valentine\'s ever!');
    document.body.style.background = "#ff6f91"; // Change background color to pink after YES
    catGifContainer.innerHTML = '';  // Clear the cat gif section.
    noResponseContainer.innerHTML = ''; // Clear the response section.
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Redirect to a fun link (e.g., Rickroll)
});

// Handle "No" button click
noButton.addEventListener('click', function() {
    // Select a random gif from the gifs array
    let randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    let randomResponse = noResponses[Math.floor(Math.random() * noResponses.length)];
    
    // Inject the gif into the catGifContainer
    catGifContainer.innerHTML = `<img src="${randomGif}" alt="Cat gif">`;
    noResponseContainer.innerHTML = randomResponse;
    catGifContainer.style.display = 'block';  // Show the gif container
    noResponseContainer.style.display = 'block'; // Show the response container

    // Move the "No" button to a random location on the page to make it playful
    moveNoButton();

    // Reset the "No" button back to its original position after 3 seconds (if needed)
    setTimeout(() => {
        noButton.style.position = "relative"; // Back to its original position
        noButton.style.left = "0px";
        noButton.style.top = "0px";
    }, 3000);
});
