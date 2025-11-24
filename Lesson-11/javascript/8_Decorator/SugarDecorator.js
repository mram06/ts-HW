export default class SugarDecorator {
    constructor(baseCoffee) {
        this.baseCoffee = baseCoffee;
    }
    getCost() {
        this.baseCoffee.getCost();
        console.log("Added sugar + 2 UAH");
    }
    getDescription() {
        this.baseCoffee.getDescription();
        console.log("Brown sugar");
    }
}
