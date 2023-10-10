/* eslint-disable no-undef */

function upp() {
  document.querySelectorAll('ul li')
    .forEach((x) => x.textContent = x.textContent.toUpperCase());
  document.querySelectorAll('ul li')[1].style.color = 'blue';

  setTimeout(() => {
    document.querySelector('button').dispatchEvent(new MouseEvent('click'));
}, 5000);
}