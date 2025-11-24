import IPaymentMethod from "./IPaymentMethod";

export default class VisaProcessor implements IPaymentMethod {
  payment(recipient: string, amount: number): void {
    console.log(`[VISA] Payment ${amount} sent to ${recipient}`);
  }
}
