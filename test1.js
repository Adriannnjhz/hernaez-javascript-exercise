const field = [
    {
        input: document.getElementById('first-name'),
        name: 'First Name',
        regex: /^[a-zA-Z]{2,30}$/,
        emptymsg: 'First Name is required.',
        invalidmsg: 'First Name must be 2-30 alphabetic characters.'
    },
    {
        input: document.getElementById('last-name'),
        name: 'Last Name',
        regex: /^[a-zA-Z]{2,30}$/,
        emptymsg: 'Last Name is required.',
        invalidmsg: 'Last Name must be 2-30 alphabetic characters.'
    },
    {
        input: document.getElementById('contact'),
        name: 'Contact Number',
        regex: /^\+\d{2}\s\d{3}\s\d{4,}$/,
        emptymsg: 'Contact Number is required.',
        invalidmsg: 'Contact Number must be a 10-digit number.'
    },
    {
        input: document.getElementById('email'),
        name: 'Email Address',
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        emptymsg: 'Email Address is required.',
        invalidmsg: 'Email Address must be a valid email format.'
    }
];

function validate(inputObj) {
    const { input, regex, emptymsg, invalidmsg } = inputObj;
    const value = input.value.trim();
    const errorValidation = input.parentElement.querySelector('.error-msg');

    if (!value) {
        errorValidation.textContent = emptymsg;
        return false;
    } else if (!regex.test(value)) {
        errorValidation.textContent = invalidmsg; 
        return false;
    } else {
        errorValidation.textContent = '';
        return true;
    }
}
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const allValid = field.every(f => validate(f));

    if (allValid) {
        console.log('All fields valid! You can submit the form.');
        form.submit();
    } else {
        console.log('Some fields are invalid.');
    }
});

// error-msg field para malabas msg below input during input event 
field.forEach(f => f.input.addEventListener('input', () => validate(f)));
