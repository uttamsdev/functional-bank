document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const depositInputValue = depositInput.value;
  if(depositInputValue === '' || isNaN(depositInputValue)){
    alert('Input Field Empty or Enter valid number.');
    return;
  }
  const depositText = document.getElementById("deposit-text");
  const currentDepositText = depositText.innerText;
  const updatedDepositText =
    parseFloat(currentDepositText) + parseFloat(depositInputValue);
  depositText.innerText = updatedDepositText;
  depositInput.value = "";
  const balanceText = document.getElementById("balance-text");
  const updatedBalance =
    parseFloat(depositInputValue) + parseFloat(balanceText.innerText);
  balanceText.innerText = updatedBalance;
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const currentWithdrawInput = withdrawInput.value;
  if(currentWithdrawInput === '' || isNaN(currentWithdrawInput)){
    alert('Input Filed Empty or Enter valid number.');
    return;
  }

  const withdrawText = document.getElementById("withdraw-text");
  const currentWithdrawText = withdrawText.innerText;
  

  const updatedWithdrawText =
    parseFloat(currentWithdrawInput) + parseFloat(currentWithdrawText);
  withdrawText.innerText = updatedWithdrawText;
  withdrawInput.value = "";

  const balance = document.getElementById("balance-text");
  const currentBalance = balance.innerText;

  const updatedBalance =
    parseFloat(currentBalance) - parseFloat(currentWithdrawInput);
  balance.innerText = updatedBalance;
});
