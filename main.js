let editprof = document.querySelector('#editProf');
let editform = document.forms.editForm;
let elements = editform.elements;
let userName = document.querySelector('.user__name');

editprof.addEventListener('click', () => {
    editform.classList.add('active');
})

elements.saveBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    userName.textContent = elements.userName.value;
    editform.classList.remove('active');
})