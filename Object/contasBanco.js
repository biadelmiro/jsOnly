//adicione um método printAccountSummary() que retorne a seguinte mensagem de conta:

//Welcome!
//Your balance is currently $1000 and your interest rate is 1%.

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
     printAccountSummary: function printAccountSummary() {
       return "Welcome!\nYour balance is currently $" + this.balance + " and your interest rate is " + this.interestRatePercent + "%.";
    }
};

console.log(savingsAccount.printAccountSummary());
