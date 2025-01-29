// Grab elements
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');
const popupGif = document.getElementById('popup-gif');

// Open popup when "Yes" or "No" is clicked
function showPopup() {
    popup.style.display = 'flex'; // Show the pop-up
}

// Close the pop-up when the "I choose YES!" button is clicked
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the pop-up
});

// Add event listeners for buttons
yesButton.addEventListener('click', showPopup);
noButton.addEventListener('click', showPopup);

