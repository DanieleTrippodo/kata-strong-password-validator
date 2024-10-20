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



    // Aggiorniamo la barra di robustezza
    updateStrengthBar([lengthValid, uppercaseValid, numberValid, specialValid]);

    // Aggiorniamo la lista dei requisiti
    updateRequirement(requirements.length, lengthValid);
    updateRequirement(requirements.uppercase, uppercaseValid);
    updateRequirement(requirements.number, numberValid);
    updateRequirement(requirements.special, specialValid);
});



// Sezione Funzioni --------------------------------------------------------
// Funzioni di validazione
function checkLength(password) {
  return password.length >= 9;
}

function checkUppercase(password) {
  return /[A-Z]/.test(password);
}

function checkNumber(password) {
  return /[0-9]/.test(password);
}

function checkSpecialChar(password) {
  return /[!@#$%^&*(),.?":{}|<>]/.test(password);
}

// Funzione per aggiornare la barra di robustezza
function updateStrengthBar(validations) {
  const validCount = validations.filter(Boolean).length;
  const strengthPercent = (validCount / validations.length) * 100;
  strengthBar.style.width = strengthPercent + '%';
}

// Funzione per aggiornare i requisiti
function updateRequirement(element, isValid) {
  if (isValid) {
    element.classList.add('valid');
  } else {
    element.classList.remove('valid');
  }
}