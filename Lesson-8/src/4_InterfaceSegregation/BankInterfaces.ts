interface IDepositable {
  deposit(amount: number): void;
}
interface IWithdrawable {
  withdraw(amount: number): void;
}
interface ITransferable {
  transfer(to: string, amount: number): void;
}
interface ILoanable {
  loanRequest(amount: number): void;
}

export { IDepositable, IWithdrawable, ITransferable, ILoanable };
