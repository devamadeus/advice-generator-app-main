const adviceId = document.querySelector('#advice-id');
const adviceText = document.querySelector('q');
const btn = document.querySelector('.dice');

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      adviceId.innerHTML = `Advice #${data.slip.id}`;
      adviceText.innerHTML = data.slip.advice;
    });
});

btn.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      adviceId.innerHTML = `Advice #${data.slip.id}`;
      adviceText.innerHTML = data.slip.advice;
    });
});

// =================================
// alternative to above click event
// =================================
// btn.addEventListener('click', () => {
//   window.location.reload();
// });
