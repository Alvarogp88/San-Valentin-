const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Hacer que el botón "No" huya
noBtn.addEventListener('mouseover', () => {
    noBtn.style.position = 'fixed';
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Transición de pantallas al pulsar "Sí"
document.getElementById('yesBtn').addEventListener('click', () => {
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('loading-screen').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('final-screen').classList.remove('hidden');
    }, 3000);
});