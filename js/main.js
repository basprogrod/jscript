

const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');

button.addEventListener('click', () => {
  modal.classList.toggle('modal-active');
});




