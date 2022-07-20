const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
    let name = '';
    name = inputEl.value;
    if (name.length === 0) {
        nameEl.textContent = 'Anonymous';
    } else {
        nameEl.textContent = name;
    }
})