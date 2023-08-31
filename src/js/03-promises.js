
const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name=delay]'),
  inputStep: document.querySelector('input[name=step]'),
  inputAmount: document.querySelector('input[name=amount]'),
}
const position = 0;
refs.inputDelay.setAttribute('step','100');
refs.inputStep.setAttribute('step','100');

// let delay = inputDelay.value;
// const step = inputStep.value;
// const amount = inputAmount.value;


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      };
    }, delay);
  });
};
  
const resolvePromise = ({ position, delay }) => {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
};
const rejectPromise = ({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
};
   
refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const values = { 
    delay: +e.target.delay.value,
    step: +e.target.step.value,
    amount: +e.target.amount.value,
  };
  makeArrPromise(values);
  //console.log(makeArrPromise(values));

  console.log(values);
  
  //createPromise(2,1500).then(resolvePromise).catch(rejectPromise);
})

const makeArrPromise = ({ delay, step, amount }) => {
  const promises = [];
  for (let i = 0; i < amount; i+=1) {
      //promises[i] = createPromise(5, 1000);
      promises[i] = createPromise(i, delay);
      delay += step;
  };

  console.log(promises);
  Promise.all(promises).then(resolvePromise).catch(rejectPromise);
};
