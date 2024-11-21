const inputValue = document.querySelector('.input__amount');
const btnTip = document.querySelectorAll('.btn');
const inputSplit = document.querySelector('.input__split');
const result = document.querySelector('.result');
const total = document.querySelector('.total');
const btn = document.querySelector('.clear');
const customTip = document.querySelector('.custom');
let tip = 0;
let tipSelected = 0;
btnTip.forEach((item) => {
  item.addEventListener('click', function (e) {
    tipSelected = Number(e.target.value);
    updateTip();
  });
});
inputValue.addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');

  updateTip();
});
inputSplit.addEventListener('input', function (e) {
  customTipRated();
  updateTip();
});
btn.addEventListener('click', function () {
  resetValuesStates();
});
customTip.addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
  if (e.target.value > 0 && tipSelected > 0) {
    alert('Just one type of tip');
    resetValuesStates();
  } else {
    customTipRated();
  }
});

function updateTip() {
  const billValue = Number(inputValue.value);
  const splitCheck = Number(inputSplit.value);
  if (billValue > 0 && tipSelected && splitCheck) {
    tip = Number((billValue * tipSelected) / 100);
    totalPerson = (billValue + tip) / splitCheck;
    result.textContent = (billValue * tipSelected) / 100;
    total.textContent = totalPerson.toFixed(2);
    btn.style.backgroundColor = '#26C0AB';
  }
}
function resetValuesStates() {
  inputValue.value = '';
  inputSplit.value = '';
  tipSelected = 0;
  result.textContent = '$0.00';
  total.textContent = '$0.00';
  btn.style.backgroundColor = '#75999d';
  customTip.value = '';
}
function customTipRated() {
  const billValue = Number(inputValue.value);
  let splitCheck = Number(inputSplit.value);
  const customTipValue = Number(customTip.value);
  tip = Number((billValue * customTipValue) / 100);
  totalPerson = (billValue + tip) / splitCheck;
  result.textContent = (billValue * customTipValue) / 100;
  total.textContent = totalPerson;
  btn.style.backgroundColor = '#26C0AB';
  if (splitCheck === 0) {
    total.textContent = 'Insert Split Quantity';
    total.style.fontSize = '15px';
  } else {
    total.textContent = totalPerson.toFixed(2);
    total.style.fontSize = '3rem';
  }
}
