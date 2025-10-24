document.write(
  ` <br>
    <div>Задача 5.  У localStorage зберігається об’єкт у форматі JSON. </div>
    <div>Проаналізувати цей об'єкт є типу Product{     title:string,     price:number }</div>
    <br>`
);

localStorage.setItem(
  "testObj",
  JSON.stringify({ title: "product1", price: 100 })
);

interface Product {
  title: string;
  price: number;
}

function isProduct(value: unknown): value is Product {
  return (
    !!value &&
    typeof value === "object" &&
    "title" in value &&
    "price" in value &&
    typeof value.title === "string" &&
    typeof value.price === "number"
  );
}

const prod: unknown = JSON.parse(localStorage.getItem("testObj")! ?? {});
if (isProduct(prod)) console.log("Is product: ", true);
else console.log("Is product: ", false);
