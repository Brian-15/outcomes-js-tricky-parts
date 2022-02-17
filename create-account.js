function createAccount(pin, amount) {
  let userPin = pin;
  let balance = amount ? amount : 0;
  return {
    checkBalance: function(enteredPin) {
      if (userPin !== enteredPin) return "Invalid PIN.";
      return "$" + balance;
    },
    deposit: function(enteredPin, depositAmount) {
      if (userPin !== enteredPin) return "Invalid PIN.";
      balance += depositAmount;
      return `Successfully deposited $${depositAmount}. Current balance: $${balance}.`;
    },
    withdraw: function(enteredPin, withdrawAmount) {
      if (userPin !== enteredPin) return "Invalid PIN.";
      if (balance < withdrawAmount) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      balance -= withdrawAmount;
      return `Successfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
    },
    changePin: function(oldPin, newPin) {
      if (oldPin !== userPin) return "Invalid PIN.";
      userPin = newPin;
      return "PIN successfully changed!";
    }
  };
}

module.exports = { createAccount };
