function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorButton = document.querySelector('.change-color');

colorButton.addEventListener('click', (color) => {
  const colorName = document.querySelector('.color');
  color = getRandomHexColor();
  colorName.textContent = color;
  window.document.body.style.backgroundColor = color;

})