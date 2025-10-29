"use strict";
document.write(` <br>
    <div>4. Обробка Фінансових Транзакцій 💳</div>
    <div>Клас: Transaction (Транзакція). Містить поля: id, amount, date, type, description. Містить метод для валідації суми.</div>
    <div>Enum: TransactionType (ТипТранзакції). Визначає напрямок або вид транзакції: DEPOSIT (Поповнення), WITHDRAWAL (Зняття), TRANSFER (Переказ).</div>
    <br>`);
var TransactionType;
(function (TransactionType) {
    TransactionType["Deposit"] = "DEPOSIT";
    TransactionType["Withdrawal"] = "WITHDRAWAL";
    TransactionType["Transfer"] = "TRANSFER";
})(TransactionType || (TransactionType = {}));
class Transaction {
    constructor(id, amount, date, type, description) {
        this.id = id;
        this.amount = amount;
        this.date = date;
        this.type = type;
        this.description = description;
        this.maxDepositAmount = 20000;
        this.maxWithdrawalAmount = 5000;
        this.maxTransferAmount = 2000;
    }
    validateAmount() {
        switch (this.type) {
            case TransactionType.Deposit:
                return this.amount <= this.maxDepositAmount;
            case TransactionType.Withdrawal:
                return this.amount <= this.maxWithdrawalAmount;
            case TransactionType.Transfer:
                return this.amount <= this.maxTransferAmount;
            default:
                const _exCheck = this.type;
                throw new Error(`Unknown type: ${this.type}`);
        }
    }
}
const test1 = new Transaction(1, 5000, new Date(), TransactionType.Withdrawal, "loan");
console.log(test1);
console.log(test1.validateAmount());
