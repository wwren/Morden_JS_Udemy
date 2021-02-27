document.getElementById('name').addEventListener('blur', validateName);

function validateName() {
    const name = document.getElementById('name');
    const re = /^[A-Za-z]{2,10}\s[A-Za-z]{2,10}/;
    isValid(name, re);
}

document.getElementById('zip').addEventListener('blur', validateZip);

function validateZip() {
  const zip = document.getElementById('zip');
  const re = /^\d{4}$/;
  isValid(zip, re);
}

function isValid(element, re) {
  if(!re.test(element.value)) {
    if (element.classList.contains('is-valid'))
    {
      element.classList.replace('is-valid', 'is-invalid');
    } else {
      element.classList.add('is-invalid');
    }     
  } else {
    if (element.classList.contains('is-invalid'))
    {
      element.classList.replace('is-invalid', 'is-valid');
    } else {
      element.classList.add('is-valid');
    }     
  }
}

document.getElementById('email').addEventListener('blur', validateEmail);

function validateEmail() {
  const email = document.getElementById('email');
  const re = /\w{1,}\.?_?@\w{1,}\.\w{1,}/;
  isValid(email, re);
}

document.getElementById('phone').addEventListener('blur', validatePhone);

function validatePhone(){
  const phone = document.getElementById('phone');
  const re = /\(\d{2}\) \d{9}/;
  isValid(phone, re);  
}
