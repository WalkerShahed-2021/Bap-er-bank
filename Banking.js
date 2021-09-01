// get the amount deposited
document.getElementById('Deposit-button').addEventListener
('click', function () {
    const DepositInput = document.getElementById('Deposit-info');
    const NewDepositText = DepositInput.value;
    const NewDepositAmount = parseFloat(NewDepositText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
      
    const PreviousDepositText = depositTotal.innerText;
    const PreviousDepositAmount = parseFloat(PreviousDepositText);

    const newDepositeTotal = PreviousDepositAmount + NewDepositAmount;
    depositTotal.innerText = newDepositeTotal;



// update acount blance
  const blanceTotal = document.getElementById('blance-total');
  const blanceTotalText = blanceTotal.innerText;
  const previousBlanceTotal = parseFloat(blanceTotalText);
  const NewBlanceTotal = previousBlanceTotal + NewDepositAmount;
  blanceTotal.innerText = NewBlanceTotal;




//    clear the deposit input
  DepositInput.value = '';

   
});


//  handle witdarw
document.getElementById('Withdraw-button').addEventListener('click', function(){
     const WithdrawInput = document.getElementById('Withdraw-input');
     const WithdrawAmountText = WithdrawInput.value;
     const newWithdrawAmount = parseFloat(WithdrawAmountText);
    console.log(newWithdrawAmount);

    // set Withdraw-total
    const WithdrawTotal = document.getElementById('Withdraw-total');
    const previousWithdrawText = WithdrawTotal.innerText;
    const previousWithdrawTotal =parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    WithdrawTotal.innerText = newWithdrawTotal;

    //update blance
    const blanceTotal = document.getElementById('blance-total');
    const previousBlanceText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceText);
    const NewBlanceTotal = previousBlanceTotal - newWithdrawAmount;
    blanceTotal.innerText = NewBlanceTotal;

    WithdrawInput.value = '';

})