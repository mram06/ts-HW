// 📂 2. Каталог товарів у магазині
// Завдання:  Опиши структуру ProductComponent, де:
// Product - це окремий товар (листок);
// Category - це категорія, яка може містити підкатегорії або товари.
// Додай метод getTotalPrice() - він повинен рахувати суму цін усіх товарів у категорії.
// Мета: продемонструвати використання Composite для розрахунків у деревоподібних структурах.

import IProduct from "./9_Composite/IProduct";
import IProductComponent from "./9_Composite/IProductComponent";
import Product from "./9_Composite/Product.js";

class Category implements IProductComponent {
  private children: IProductComponent[] = [];

  constructor(private title: string = "title") {}

  add(item: IProductComponent): void {
    this.children.push(item);
  }

  getTotalPrice(): IProduct {
    let sum = 0;
    for (const child of this.children) {
      sum += child.getTotalPrice().price;
    }
    return { title: this.title, price: sum };
  }
}

const p1 = new Product("Mouse", 300);
const p2 = new Product("Keyboard", 1000);
const p3 = new Product("Processor", 15000);
const p4 = new Product("Graphic card", 21000);

const accessories = new Category("Accessories");
const pcParts = new Category("PC parts");
const computers = new Category("Computers");

accessories.add(p1);
accessories.add(p2);
pcParts.add(p3);
pcParts.add(p4);

computers.add(accessories);
computers.add(pcParts);

console.log(computers.getTotalPrice());
console.log(accessories.getTotalPrice());
console.log(pcParts.getTotalPrice());
