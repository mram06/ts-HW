document.write(
  ` <br>
    <div>4. Обробка Фінансових Транзакцій 💳</div>
    <div>Клас: Transaction (Транзакція). Містить поля: id, amount, date, type, description. Містить метод для валідації суми.</div>
    <div>Enum: TransactionType (ТипТранзакції). Визначає напрямок або вид транзакції: DEPOSIT (Поповнення), WITHDRAWAL (Зняття), TRANSFER (Переказ).</div>
    <br>`
);

enum TransactionType {
  Deposit = "DEPOSIT",
  Withdrawal = "WITHDRAWAL",
  Transfer = "TRANSFER",
}

class Transaction {
  private maxDepositAmount: number = 20000;
  private maxWithdrawalAmount: number = 5000;
  private maxTransferAmount: number = 2000;

  constructor(
    readonly id: string | number,
    readonly amount: number,
    readonly date: Date,
    readonly type: TransactionType,
    readonly description: string
  ) {}

  validateAmount(): boolean {
    switch (this.type) {
      case TransactionType.Deposit:
        return this.amount <= this.maxDepositAmount;
      case TransactionType.Withdrawal:
        return this.amount <= this.maxWithdrawalAmount;
      case TransactionType.Transfer:
        return this.amount <= this.maxTransferAmount;

      default:
        const _exCheck: never = this.type;
        throw new Error(`Unknown type: ${this.type}`);
    }
  }
}

const test1 = new Transaction(
  1,
  5000,
  new Date(),
  TransactionType.Withdrawal,
  "loan"
);
console.log(test1);
console.log(test1.validateAmount());
