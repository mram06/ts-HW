import ApplePayProcessor from "./2_Factory/ApplePayProcessor.js";
import PayPalProcessor from "./2_Factory/PayPalProcessor.js";
import VisaProcessor from "./2_Factory/VisaProcessor.js";
class PaymentProcessor {
    static createProcessor(type) {
        switch (type) {
            case "visa":
                return new VisaProcessor();
            case "applepay":
                return new ApplePayProcessor();
            case "paypal":
                return new PayPalProcessor();
            default:
                const exCheck = type;
                throw new Error(`Unknown type: ${type}`);
        }
    }
}
const processor = PaymentProcessor.createProcessor("applepay");
processor.payment("Dmytro", 500);
