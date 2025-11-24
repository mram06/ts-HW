import IProduct from "./IProduct";
import IProductComponent from "./IProductComponent";

export default class Product implements IProductComponent {
  constructor(private title: string = "title", private price: number = 0) {}

  getTotalPrice(): IProduct {
    return { title: this.title, price: this.price };
  }
}
