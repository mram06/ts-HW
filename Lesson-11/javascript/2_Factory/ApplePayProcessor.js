export default class ApplePayProcessor {
    payment(recipient, amount) {
        console.log(`[ApplePay] Payment ${amount} sent to ${recipient}`);
    }
}
