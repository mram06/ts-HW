document.write(
  ` <br>
    <div>Задача 4. Є продукти: Book (має author), Electronics (має warranty), Clothes (має size). </div>
    <div>Продукти можуть бути onSale або regularPrice. Створити тип ShopProduct, який об’єднує тип продукту та його статус, використовуючи & і |.</div>
    <br>`
);

interface IBook {
  author: string;
}

interface IElectronics {
  warranty: number;
}

interface IClothes {
  size: string | number;
}

interface IProductStatus {
  status: "onSale" | "regularPrice";
}

type ShopProduct = (IBook | IElectronics | IClothes) & IProductStatus;

const product: ShopProduct = {
  author: "Author1",
  size: 50,
  warranty: 12,
  status: "onSale",
};
