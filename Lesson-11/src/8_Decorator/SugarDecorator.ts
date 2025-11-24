import Coffee from "./Coffee.js";
import ICoffee from "./ICoffee.js";

export default class SugarDecorator implements ICoffee {
  constructor(private baseCoffee: Coffee) {}

  getCost() {
    this.baseCoffee.getCost();
    console.log("Added sugar + 2 UAH");
  }

  getDescription() {
    this.baseCoffee.getDescription();
    console.log("Brown sugar");
  }
}
