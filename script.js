const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Botón "No" huye
noBtn.addEventListener('mouseover', () => {
    noBtn.style.position = 'fixed';

    const range = 150; // distancia máxima que puede alejarse

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const x = centerX + (Math.random() - 0.5) * range;
    const y = centerY + (Math.random() - 0.5) * range;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Pantallas
yesBtn.addEventListener('click', () => {
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('loading-screen').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('final-screen').classList.remove('hidden');
    }, 3000);
});