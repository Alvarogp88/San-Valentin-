const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
    // Calcula posiciones aleatorias dentro de la ventana
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

document.getElementById('yesBtn').addEventListener('click', () => {
    alert("¡Sabía que dirías que sí! ❤️");
});