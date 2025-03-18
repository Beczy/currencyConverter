const amount = document.getElementById('amount');
const from = document.getElementById('from');
const change = document.querySelector('.change');
const to = document.getElementById('to');
const exchange = document.querySelector('.exchange-button');
const result = document.querySelector('.result');

exchange.addEventListener('click', () => {
  const fromValue = from.value;
  const toValue = to.value;
  const amountValue = amount.value;
  const apiKey = 'fccc792fd766da0a4864bee4';

  if (isNaN(amountValue) || amountValue <= 0) {
    result.innerHTML = 'Please enter a valid amount';
    return; 
  }

  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromValue}/${toValue}/${amountValue}`)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `${amountValue} ${fromValue} = ${data.conversion_result} ${
        toValue
      }`;
    })
    .catch((error) => {
      console.log(error);
    });
});

change.addEventListener('click', () => {
  const fromValue = from.value;
  const toValue = to.value;
  from.value = toValue;
  to.value = fromValue;
  exchange.click();
});
