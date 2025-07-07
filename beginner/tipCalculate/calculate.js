const billAmount= document.getElementById('bill-amount');
const peopleAmonut = document.getElementById('people-amount');
const tipAmount =  document.getElementById('tip-output');
const totalOutput =  document.getElementById('total-output');
const tipperPerson = document.getElementById('tip-amount-per-person');
const totalperPerson = document.getElementById('total-amount-per-person');
const percent = document.getElementById('tip-percent');
//const percent = document.querySelectorAll('input[name=tip-percent')

const calculate = document.getElementById('calculate-bill').addEventListener('click', function () {
   //const bills = billAmount.value
   let percentTip = parseFloat(percent / 100);
   if (billAmount === '' && percent.value ===''){
      alert('Enter valid values');
      return;
   }
    const billInput = billAmount.value;
    const bill = parseFloat(billInput)
    bill = billAmount
    
   let total = (billAmount * percentTip) / peopleAmonut
   totalOutput.textContent = total;
});
const resetBtn = document.getElementById('reset-bill').addEventListener('click', function () {
   
});

//tip amount = bill * perecntTip
//toatl amount = bill + tip
//tip per people = tip / 2
//total per people = (bill + tip) / people 
