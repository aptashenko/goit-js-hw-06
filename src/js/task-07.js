const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

let fontSize = inputEl.value;
textEl.style.fontSize = fontSize + 'px';

inputEl.addEventListener('input', () => {
    fontSize = inputEl.value;
    textEl.style.fontSize = fontSize + 'px';
})