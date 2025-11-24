import IProduct from "./IProduct";

export default interface IProductComponent {
  getTotalPrice(price?: number): IProduct;
}
