export default interface IPaymentMethod {
  payment(recipient: string, amount: number): void;
}
