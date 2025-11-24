import Coffee from "./Coffee.js";
import ICoffee from "./ICoffee.js";

export default class MilkDecorator implements ICoffee {
  constructor(private baseCoffee: Coffee) {}

  getCost() {
    this.baseCoffee.getCost();
    console.log("Added milk + 10 UAH");
  }

  getDescription() {
    this.baseCoffee.getDescription();
    console.log("Almond milk");
  }
}
