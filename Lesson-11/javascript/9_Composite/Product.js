export default class Product {
    constructor(title = "title", price = 0) {
        this.title = title;
        this.price = price;
    }
    getTotalPrice() {
        return { title: this.title, price: this.price };
    }
}
