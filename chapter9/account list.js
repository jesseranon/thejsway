class Account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }

    credit(num) {
        this.balance += num;
    }

    describe() {
        console.log(`owner: ${this.name}, balance: ${this.balance}`);
    }
}

const sean = new Account('Sean');
const brad = new Account('Brad');
const georges = new Account('Georges');

[sean, brad, georges].forEach(acc => {
    acc.credit(1000);
    acc.describe();
});