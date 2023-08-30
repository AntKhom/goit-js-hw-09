import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import "notiflix/dist/notiflix-3.2.6.min.css";



const inputTime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const timer = document.querySelector('.timer .value');

//Пожскажите пожалуйста более удобный выбор элементов, 
//а то я запутался
const timerDays = document.querySelector('.value[data-days]');
const timerHours = document.querySelector('.value[data-hours]');
const timerMinutes = document.querySelector('.value[data-minutes]');
const timerSeconds = document.querySelector('.value[data-seconds]');

let startDate = null;
let diffDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < Date.now()) {
            Notify.failure("Please choose a date in the future");
            return;
        }
        startDate = selectedDates[0].getTime();
        startBtn.disabled = false;
        console.log(startDate);
        updateTimer(convertMs(startDate-Date.now()));
        return startDate;
  },
};

flatpickr(inputTime, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const pad = (value) => {
    return String(value).padStart(2, '0');
}

const updateTimer = ({ days, hours, minutes, seconds }) => {
    timerDays.textContent = pad(days);
    timerHours.textContent = pad(hours);
    timerMinutes.textContent = pad(minutes);
    timerSeconds.textContent = pad(seconds);
};

const startTimer = () => {
    diffDate = startDate - Date.now();
    startBtn.disabled = true;
    Notify.info(`Start. Time left 
        ${convertMs(diffDate).days} :
        ${pad(convertMs(diffDate).hours)} :
        ${pad(convertMs(diffDate).minutes)} :
        ${timerSeconds.textContent}`); // как сделать чтобы секунды шли?
        
    
    const timerId = setInterval(() => {
    diffDate = startDate - Date.now();        
        if (diffDate <= 0) {
            Notify.success('Time is over');
            clearInterval(timerId);
            updateTimer(convertMs(0));
            return;
        };
        // Почему не работает???
        // if (convertMs(diffDate).seconds == 60) {
        //     Notify.warning('Attention! Left less minute');
        // };
        console.log(diffDate);
        updateTimer(convertMs(diffDate));
    },1000)
    
}

startBtn.addEventListener('click', startTimer);



