const form = document.querySelector('.form');
function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve('ok');
      } else {
        reject('no');
      };
    }, delay);
  });
  return promise;
};
  
const ok = ({ position, delay }) => {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
};
const no = ({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  };
   
form.addEventListener('submit', (e) => {
  e.preventDefault();
//  console.log(e);
  createPromise(2,1500).then(ok).catch(no);
})