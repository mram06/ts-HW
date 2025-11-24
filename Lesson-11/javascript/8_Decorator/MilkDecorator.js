export default class MilkDecorator {
    constructor(baseCoffee) {
        this.baseCoffee = baseCoffee;
    }
    getCost() {
        this.baseCoffee.getCost();
        console.log("Added milk + 10 UAH");
    }
    getDescription() {
        this.baseCoffee.getDescription();
        console.log("Almond milk");
    }
}
