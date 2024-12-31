// Cronómetro
const countdownTimer = document.getElementById("countdown-timer");

function startCountdown(targetDate) {
    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft < 0) {
            countdownTimer.innerHTML = "<div>¡Evento terminado!</div>";
            return;
        }

        const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownTimer.innerHTML = `
            <div class="time-block">
                <span class="time-value">${months}</span>
                <small class="time-label">Meses</small>
            </div>
            <div class="time-block">
                <span class="time-value">${days}</span>
                <small class="time-label">Días</small>
            </div>
            <div class="time-block">
                <span class="time-value">${hours}</span>
                <small class="time-label">Horas</small>
            </div>
            <div class="time-block">
                <span class="time-value">${minutes}</span>
                <small class="time-label">Minutos</small>
            </div>
            <div class="time-block">
                <span class="time-value">${seconds}</span>
                <small class="time-label">Segundos</small>
            </div>
        `;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

const targetDate = new Date("202-12-31T23:59:59").getTime();
startCountdown(targetDate);

// Navegación entre secciones
document.getElementById("inicio-link").addEventListener("click", () => {
    document.getElementById("inicio").classList.remove("hidden");
    document.getElementById("informacion").classList.add("hidden");
});

document.getElementById("informacion-link").addEventListener("click", () => {
    document.getElementById("inicio").classList.add("hidden");
    document.getElementById("informacion").classList.remove("hidden");
});