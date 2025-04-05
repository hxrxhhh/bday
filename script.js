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
// Updated music handling
document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('birthdayMusic');
    const musicBtn = document.getElementById('musicBtn');
    let isPlaying = false;

    // First click handler for entire page
    const firstClickHandler = () => {
        music.play().catch(error => {
            console.log('Autoplay prevented - showing play button');
        });
        document.body.removeEventListener('click', firstClickHandler);
    };

    document.body.addEventListener('click', firstClickHandler);

    // Music button handler
    musicBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (music.paused) {
            music.play();
            musicBtn.textContent = '🎵 Pause Music';
        } else {
            music.pause();
            musicBtn.textContent = '🎵 Play Music';
        }
    });
});