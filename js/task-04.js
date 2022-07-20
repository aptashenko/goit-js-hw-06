const currentValue = document.querySelector('#value');
const buttonsEl = document.querySelectorAll('button');
let counterValue = 0;

buttonsEl.forEach(el => {
    el.addEventListener('click', () => {
        if (el.dataset.action === 'increment') {
            counterValue += 1;
            currentValue.textContent = counterValue;
        } else if (el.dataset.action === 'decrement') {
            counterValue -= 1;
            currentValue.textContent = counterValue;
        }
    })
})