const timeInput = document.getElementById('timeInput');
const timeDisplay = document.getElementById('timeDisplay');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

let countdown;
let remainingTime = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning && remainingTime > 0) {
        isRunning = true;
        countdown = setInterval(updateTimer, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(countdown);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    remainingTime = 0;
    timeDisplay.textContent = "00:00";
    timeInput.value = "";
}

function updateTimer() {
    if (remainingTime > 0) {
        remainingTime--;
        displayTime(remainingTime);
    } else {
        clearInterval(countdown);
        isRunning = false;
    }
}

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

startButton.addEventListener('click', () => {
    remainingTime = parseInt(timeInput.value, 10) || 0;
    displayTime(remainingTime);
    startTimer();
});

pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);