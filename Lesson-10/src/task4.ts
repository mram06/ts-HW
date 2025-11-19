// 4. Використовуючи тип параметрів createProduct (title, price,discount)
// розробити функцію, яка б формувала параметри для створення продукту.

function createProduct(title: string, price: number, discount: number) {
  return { title, price, discount };
}

type Product = ReturnType<typeof createProduct>;
type ProductArgs = Parameters<typeof createProduct>;

function createProductWithArgs([title, price, discount]: ProductArgs): Product {
  return { title, price, discount };
}
