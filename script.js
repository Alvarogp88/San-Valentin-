const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Botón "No" huye
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
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