import ApplePayProcessor from "./2_Factory/ApplePayProcessor.js";
import PayPalProcessor from "./2_Factory/PayPalProcessor.js";
import VisaProcessor from "./2_Factory/VisaProcessor.js";
// 🏦 2. Оплата через різні платіжні системи
// Створи базовий клас PaymentProcessor і окремі реалізації:
// VisaProcessor, PayPalProcessor, ApplePayProcessor.
// Використай фабричний метод createProcessor(type: string),
// щоб отримати потрібний процесор залежно від обраного способу оплати.

type PaymentTypes = "visa" | "applepay" | "paypal";

class PaymentProcessor {
  static createProcessor(type: PaymentTypes) {
    switch (type) {
      case "visa":
        return new VisaProcessor();
      case "applepay":
        return new ApplePayProcessor();
      case "paypal":
        return new PayPalProcessor();

      default:
        const exCheck: never = type;
        throw new Error(`Unknown type: ${type}`);
    }
  }
}

const processor = PaymentProcessor.createProcessor("applepay");
processor.payment("Dmytro", 500);
