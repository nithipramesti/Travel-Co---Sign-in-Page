const emailInput = document.querySelector('#form-email');
const form = document.querySelector('form');

emailInput.addEventListener('input', () => {
    emailInput.setCustomValidity('');
    emailInput.checkValidity();
});

emailInput.addEventListener('invalid', () => {
  if(emailInput.value === '') {
    emailInput.setCustomValidity('Enter your email');
  } else {
    emailInput.setCustomValidity('Plese enter valid email address');
  }
});