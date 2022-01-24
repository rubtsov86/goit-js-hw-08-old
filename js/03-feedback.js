import throttle from "lodash.throttle";

const formRef = document.querySelector('form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    

    console.log(inputRef.value);

    localStorage.setItem('inputData', JSON.stringify({"email": inputRef.value, "message": textareaRef.value }))
    console.log(localStorage.getItem('inputData'));
    e.target.reset();
}

