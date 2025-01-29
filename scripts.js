let noButton = document.getElementById('no');
let yesButton = document.getElementById('yes');
let catGifContainer = document.getElementById('catGif');
let noResponseContainer = document.getElementById('noResponse');
let gifs = [
    "https://media.giphy.com/media/10d3Q4pPHk7Pq0/giphy.gif", // Sad cat with big eyes
    "https://media.giphy.com/media/l4FGrD4K54iWm0QEK/giphy.gif", // Grumpy cat
    "https://media.giphy.com/media/3o6gE5pXwwzHD9x5nS/giphy.gif", // Cat facepalm
    "https://media.giphy.com/media/VwXyYY2Aq7TzW/giphy.gif", // Cat scream
    "https://media.giphy.com/media/xT5LMBHe5kff6pt1Nc/giphy.gif"  // Cat crying
];

let noResponses = [
    "Why you gotta be like that? 😿 Try again!",
    "Oops, you just broke my heart! 😢 Can you click YES instead?",
    "I won't give up! 😜 Please click YES! 💖",
    "You don't mean it... Click YES, please! 😽",
    "Not today! But try again... 💔 Click YES! 😸"
];

function moveNoButton() {
    let randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    let randomY = Math.floor(Math.random() * (window.innerHeight - 100));
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

yesButton.addEventListener('click', function() {
    alert('YES!!! 💖💘 You just made my day!!! 😍🎉 Let\'s have the best Valentine\'s ever!');
    document.body.style.background = "#ff6f91"; // Change background after clicking YES
    catGifContainer.innerHTML = '';  // Clear the cat gif section.
    noResponseContainer.innerHTML = ''; // Clear the response section.
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Redirect or play a fun video
});

noButton.addEventListener('click', function() {
    let randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    let randomResponse = noResponses[Math.floor(Math.random() * noResponses.length)];
    
    catGifContainer.innerHTML = `<img src="${randomGif}" alt="Cat gif">`;
    noResponseContainer.innerHTML = randomResponse;
    catGifContainer.style.display = 'block';
    noResponseContainer.style.display = 'block';

    moveNoButton(); // Move the No button to a random position

    // Wait 3 seconds, then reset the button location to allow "No" clicking again
    setTimeout(() => {
        noButton.style.position = "relative"; // Back to the original position
        noButton.style.left = "0px";
        noButton.style.top = "0px";
    }, 3000);
});
