
class BankAccount {
    constructor(balance, interestRate) {
        this.balance = balance;
        this.interestRate = interestRate;
    }
    
    addInterest(interestRate) {
        this.balance = this.balance/interestRate;
    }
    
    
    
}


class BankAccountWithFee extends BankAccount {
    constructor(balance, interestRate) {
        super (balance, interestRate);
        this.fee = 10; 
    } 
    applyFee(fee) {
        this.balance -= fee;
    }
}



let chase = new BankAccountWithFee(1000, .25);

console.log(chase.balance);



chase.applyFee(15);
console.log(chase.balance);