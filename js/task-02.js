const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');

ingredients.forEach(el => {
  const liItem = document.createElement('li');
  liItem.textContent = el;
  liItem.classList.add('item');
  listOfIngredients.append(liItem);
})
