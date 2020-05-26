const h1 = document.querySelector('h1');
const myform = document.querySelector('#my_form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const btn = document.querySelector('.btn');

//console.log(myform);

// btn.addEventListener('click',(e)=>{
//   e.preventDefault();
//   myform.style.background = '#636363';
// });

myform.addEventListener('submit',onSubmit);

function onSubmit(e) {

  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = "Enter both values";

    setTimeout(() => {
      msg.classList.remove('error');
      msg.innerHTML = "";
    },2000);
  }
  else {
    msg.classList.add('added');
    msg.innerHTML = "User added";
    const li = document.createElement('li');

    setTimeout(() => {
      msg.classList.remove('added');
      msg.innerHTML = "";
    },2000);

    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);
    userList.classList.add('li');

    nameInput.value = '';
    emailInput.value = '';
  }

  e.preventDefault();
}
