// Fondo de partículas
const canvas = document.getElementById('particle-background');
const ctx = canvas.getContext('2d');

// Ajustar tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Crear partículas
let particlesArray = [];
const numberOfParticles = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1; // Tamaño inicial de las partículas
        this.speedX = Math.random() * 2 - 1; // Velocidad horizontal
        this.speedY = Math.random() * 2 - 1; // Velocidad vertical
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reaparecer si salen de los límites del canvas
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = 'gold'; // Color de las partículas
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Inicializar partículas
function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

// Manejar y dibujar partículas
function handleParticles() {
    particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
    });
}

// Animación de partículas
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    handleParticles();
    requestAnimationFrame(animateParticles);
}

// Ajustar tamaño del canvas al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles(); // Reiniciar partículas
});

// Inicializar y animar partículas
initParticles();
animateParticles();

// Validación del código
const submitButton = document.getElementById('submit-button');
const codeInput = document.getElementById('code-input');
const errorMessage = document.getElementById('error-message');
const loginButtons = document.getElementById('login-buttons');
const codeSection = document.querySelector('.code-section'); // Sección completa del input

// Ocultar botones al cargar la página
window.onload = function () {
    loginButtons.classList.add('hidden');
};

// Validar código al hacer clic en el botón
submitButton.addEventListener('click', function () {
    const code = codeInput.value.trim(); // Eliminar espacios extra
    if (code === 'Dr559tYzk1') {
        errorMessage.classList.add('hidden'); // Ocultar mensaje de error
        loginButtons.classList.remove('hidden'); // Mostrar botones
        loginButtons.classList.add('fade-in'); // Aplicar efecto de desvanecimiento
        codeSection.style.display = 'none'; // Ocultar la sección del input y el botón
    } else {
        errorMessage.textContent = 'El código ingresado es incorrecto. Inténtalo nuevamente.'; // Mostrar mensaje de error
        errorMessage.classList.remove('hidden'); // Asegurar que el mensaje sea visible
    }
});