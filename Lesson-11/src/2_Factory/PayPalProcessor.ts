import IPaymentMethod from "./IPaymentMethod";

export default class PayPalProcessor implements IPaymentMethod {
  payment(recipient: string, amount: number): void {
    console.log(`[PayPal] Payment ${amount} sent to ${recipient}`);
  }
}
