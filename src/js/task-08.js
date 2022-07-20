const formEl = document.querySelector('.login-form');

const usersData = {
    email: '',
    password: '',
};

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formEl.elements.email.value === '' || formEl.elements.password.value === '') {
        alert('Все поля должны быть заполнены!')
    } else {
        usersData.email = formEl.elements.email.value;
        usersData.password = formEl.elements.password.value;
        formEl.reset();
        console.log(usersData);
    }
})
