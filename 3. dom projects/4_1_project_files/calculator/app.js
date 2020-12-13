document.getElementById('load-form').addEventListener('submit', function(e) {

  //hide result
  // document.getElementById('result').style.display = 'none';
  //show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculatePayment, 2000);
  //when submit a form, prevent it from submitting 
  //when click on a link, prevent it from redirecting 
  e.preventDefault();
});

function calculatePayment() {
  
  //get inputs
  const loadAmount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const yearsRepay = document.getElementById('year');

  //get UI variables 
  const monthPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  //convert document HTML elements 
  const principle = parseFloat(loadAmount.value);
  const interestMonthly = parseFloat(interest.value)/100 /12;
  const totalMonth = parseInt(yearsRepay.value) * 12;

  //calculate monthly payment 
  const totalPay = principle * Math.pow((1 + interestMonthly), totalMonth);
  const monthPay = totalPay / totalMonth;
  const totalInt = (totalPay/principle -1)*100;
  
  //fill up UI variables
  if (!Number.isNaN(monthPay)){
    monthPayment.value = monthPay.toFixed(2);
    totalPayment.value = totalPay.toFixed(2);
    totalInterest.value = totalInt.toFixed(2);  

    document.getElementById('loading').style.display = 'none';
    document.getElementById('result').style.display = 'block';
  } else {
    showWarning();
  }
  
}

function showWarning() {

  let newWarning = document.createElement('div');
  newWarning.textContent = 'Please check you inputs';
  newWarning.className = 'alert alert-danger';

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  card.prepend(newWarning);

  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
}