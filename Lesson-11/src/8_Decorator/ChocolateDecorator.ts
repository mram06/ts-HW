import Coffee from "./Coffee.js";
import ICoffee from "./ICoffee.js";

export default class ChocolateDecorator implements ICoffee {
  constructor(private baseCoffee: Coffee) {}

  getCost() {
    this.baseCoffee.getCost();
    console.log("Added chocolate + 5 UAH");
  }

  getDescription() {
    this.baseCoffee.getDescription();
    console.log("Milk chocolate");
  }
}
