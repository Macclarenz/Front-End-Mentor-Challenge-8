const getFirstName = document.getElementById('firstName');
const getLastName = document.getElementById('lastName');
const getEmail = document.getElementById('email');
const getPassword = document.getElementById('password');
const form = document.getElementById('form');
const inputs = document.querySelectorAll('form input');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
})

function error(name) {
    const child = document.getElementById(name);
    const parent = child.parentElement;
    parent.classList.remove('error')
}

// check if the value is empty or valid

function checkInputs() {
    const firstName = getFirstName.value;
    const lastName = getLastName.value;
    const email = getEmail.value;
    const password = getPassword.value;
    let msg = 'cannot be empty';

    if (firstName === '') {
        setError(getFirstName, `First Name ${msg}`);
    } else {
        setSuccess(getFirstName);
    }

    if (lastName === '') {
        setError(getLastName, `Last Name ${msg}`);
    } else {
        setSuccess(getLastName)
    }

    if (email === '') {
        getEmail.placeholder = 'email@example/com'
        setError(getEmail, 'Looks like this is not an email');
    } else {
        setSuccess(getEmail);
        getEmail.placeholder = 'Email Address'
    }

    if (password === '') {
        setError(getPassword, `Password ${msg}`);
    } else {
        setSuccess(getPassword);
    }

    if (firstName && lastName && email && password) {
        // alert('success')
        successLog();
    }
}

function setError(input, message) {
    const inputContainer = input.parentElement;
    const msg = inputContainer.querySelector('.input-container p');
    inputContainer.classList.add('error');

    msg.innerHTML = message;
}

function setSuccess(input) {
    const inputContainer = input.parentElement;
    inputContainer.classList.remove('error');
}

function successLog() {
    const tl = gsap.timeline({defaults: {ease: 'power2.out'}});

    tl.fromTo('.slider-container', {top: '100%'}, {ease: Power2.easeOut, top: '50%', duration: .25, zIndex: 5})  
    tl.fromTo('.slider-text', {opacity: 0}, {ease: Power1.easeInOut, opacity: 1, duration: .2})
    tl.fromTo('.slider-container', {opacity: 1},{ease: Power1.easeInOut, opacity: 0, duration: .2, delay: .6, zIndex: -1})
}
