export default class ChocolateDecorator {
    constructor(baseCoffee) {
        this.baseCoffee = baseCoffee;
    }
    getCost() {
        this.baseCoffee.getCost();
        console.log("Added chocolate + 5 UAH");
    }
    getDescription() {
        this.baseCoffee.getDescription();
        console.log("Milk chocolate");
    }
}
