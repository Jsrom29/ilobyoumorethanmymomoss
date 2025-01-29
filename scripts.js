document.getElementById('yes').addEventListener('click', function() {
    alert('Yay! I’m so happy! 😍💖');
    document.body.style.background = "linear-gradient(135deg, #ffafcc, #ff6f91)";
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Or any redirect link you'd like!
});

document.getElementById('no').addEventListener('click', function() {
    document.getElementById('catGif').style.display = 'block';
    document.getElementById('no').style.display = 'none';
    alert('You’re breaking my heart! 😢 Please click YES!');
    setTimeout(function() {
        document.getElementById('no').style.display = 'inline-block';
    }, 2000);
});

