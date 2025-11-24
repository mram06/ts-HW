export default class PayPalProcessor {
    payment(recipient, amount) {
        console.log(`[PayPal] Payment ${amount} sent to ${recipient}`);
    }
}
