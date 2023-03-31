let Btn = document.querySelector('#button');
let input = document.querySelector('#input');
let list = document.querySelector('.list');

let htmlLs;

if(localStorage.getItem('htmlLs')){
    list.innerHTML = localStorage.getItem('htmlLs');
}

Btn.addEventListener('click', () =>{
    let elem = document.createElement('li');
    elem.textContent = input.value;
    list.append(elem);
    input.value = ""; // очщение инпута
    localStorage.setItem('htmlLs', list.innerHTML);
})







// localStorage.setItem('ключ', 'значение')

//localStorage.setItem('name', 'Владимир');

// localStorage.getItem('ключ')

//let nameLS = localStorage.getItem('name');

// localStorage.removeItem("Ключ")

//localStorage.removeItem('name');

// localStorage.clear()