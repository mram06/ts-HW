import IPaymentMethod from "./IPaymentMethod";

export default class ApplePayProcessor implements IPaymentMethod {
  payment(recipient: string, amount: number): void {
    console.log(`[ApplePay] Payment ${amount} sent to ${recipient}`);
  }
}
