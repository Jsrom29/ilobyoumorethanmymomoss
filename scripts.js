// Grab elements
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const responseMessage = document.getElementById('response-message');

// Fun denial response for "No"
function handleNoClick() {
    responseMessage.textContent = "Uh-oh! You can't say no to me that easily! 😏💖";
    noButton.disabled = true; // Disable the no button
    setTimeout(() => {
        responseMessage.textContent = "Are you sure? 😘";
        setTimeout(() => {
            responseMessage.textContent = "How about YES? 💕";
            noButton.disabled = false; // Reactivate the no button after a delay
        }, 2000);
    }, 2000);
}

// Handle "Yes" response
function handleYesClick() {
    responseMessage.textContent = "Yay!!! 💖 You said YES! I’m so happy!!! 🎉";
    yesButton.disabled = true; // Disable the yes button
}

// Event Listeners
yesButton.addEventListener('click', handleYesClick);
noButton.addEventListener('click', handleNoClick);
