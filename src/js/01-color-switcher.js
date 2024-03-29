const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
stopBtn.disabled = true;
let intervalId = null;
// console.log(startBtn, '...', stopBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startChangeColorHandler = () => {
        intervalId = setInterval(() => {
            const currentColor = getRandomHexColor();
            bodyEl.style.backgroundColor = currentColor;
        }, 1000);
    // console.log(intervalId);
    startBtn.disabled = true;
    stopBtn.disabled = false;

}

const stopChangeColorHandler = () => {
    clearInterval(intervalId);
    // console.log(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', startChangeColorHandler);
stopBtn.addEventListener('click', stopChangeColorHandler);
