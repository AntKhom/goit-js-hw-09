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
  promise.then(result => {
    alert(result);
  })
  .catch(result => {
    alert(result);
  });
};
   



form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
  createPromise(1,1);
})