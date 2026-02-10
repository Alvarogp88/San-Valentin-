const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionContainer = document.querySelector('.question-container');
const loadingScreen = document.getElementById('loading-screen');
const finalScreen = document.getElementById('final-screen');

noBtn.addEventListener('mouseover', () => {
    // Definimos un margen para que no se pegue al borde exacto
    const padding = 20; 
    
    // Calculamos el espacio disponible restando el tamaño del botón y el margen
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    // Generamos la posición asegurándonos de que sea al menos igual al margen
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener('click', () => {
    // 1. Ocultar la pregunta inicial
    questionContainer.style.display = 'none';
    
    // 2. Mostrar pantalla de carga
    loadingScreen.style.display = 'block';

    // 3. Esperar 3 segundos (3000ms) y pasar a la pantalla final
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        finalScreen.style.display = 'block';
    }, 3000); 
});