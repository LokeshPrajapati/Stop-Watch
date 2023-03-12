// Initialize variables
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Get elements from the DOM
const display = document.getElementById("watch");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

// Event listeners for buttons
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

// Start timer function
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateDisplay, 10);
}

// Pause timer function
function pauseTimer() {
  clearInterval(timerInterval);
}

// Reset timer function
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00";
}

// Update display function
function updateDisplay() {
  elapsedTime = Date.now() - startTime;
  const minutes = Math.floor((elapsedTime / 1000 / 60) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((elapsedTime / 1000) % 60)
    .toString()
    .padStart(2, "0");
  const milliseconds = Math.floor((elapsedTime % 1000) / 10)
    .toString()
    .padStart(2, "0");
  display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}
