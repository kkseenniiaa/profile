let editProf = document.querySelector('#editProf');
let editForm = document.forms.editForm;
let elements = editForm.elements;
let userName = document.querySelector('.user__name');
let userInfo = document.querySelectorAll('.user__info-text');

editProf.addEventListener('click', () => {
    editForm.classList.add('active');
})

console.log(Boolean(localStorage.getItem('userName')) == true);
console.log(Boolean(localStorage.getItem('name')) == false);

if (localStorage.getItem('userName')) {
    userName.textContent = localStorage.getItem('userName');
}

userInfo[0].textContent = localStorage.getItem('city');

elements.saveBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    userName.textContent = elements.userName.value;
    localStorage.setItem('userName', userName.textContent);
    editForm.classList.remove('active');

    userInfo[0].textContent = elements.city.value;
    localStorage.setItem('city', userInfo[0].textContent);
    userInfo[1].textContent = elements.learnLocation.value;
})

// localStorage.setItem('ключ', 'значение')

localStorage.setItem('name', 'Владимир');

// localStorage.getItem('ключ')

let nameLS = localStorage.getItem('name');

// localStorage.removeItem("Ключ")

localStorage.removeItem('name');

// localStorage.clear()