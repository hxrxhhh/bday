document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('birthdayMusic');
    const musicBtn = document.getElementById('musicBtn');

    // Start music on first interaction
    document.body.addEventListener('click', () => {
        if (music.paused) {
            music.play();
        }
    }, { once: true });

    musicBtn.addEventListener('click', () => {
        music.paused ? music.play() : music.pause();
        musicBtn.textContent = music.paused ? '🎵 Play Music' : '🎵 Pause Music';
    });

    // Add random animation delays to images
    document.querySelectorAll('.gallery-img').forEach((img, index) => {
        img.style.animationDelay = `${index * 0.3}s`;
    });
});