const categoryEl = document.querySelectorAll('.item');
const titleEl = document.querySelectorAll('h2');
console.log('Number of categories:', categoryEl.length);

titleEl.forEach(el => {
    // console.log('Category:', el.textContent, '\nElements:', el.nextElementSibling.children.length);
    // OR 
    console.log('Category:', el.textContent);
    console.log('Elements:', el.nextElementSibling.children.length);
});