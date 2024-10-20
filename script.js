// per selezionare gli elementi nel DOM
const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const requirements = {
  length: document.getElementById('length'),
  uppercase: document.getElementById('uppercase'),
  number: document.getElementById('number'),
  special: document.getElementById('special')
};



// event listener per l'input della password
passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;


    /* adesso, verifichiamo ogni elemento */
    const lengthValid = checkLength(password);
    const uppercaseValid = checkUppercase(password);
    const numberValid = checkNumber(password);
    const specialValid = checkSpecialChar(password);
});
