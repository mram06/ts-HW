// Задача 3. Інтерфейс для перетворювача.
// Створи інтерфейс Transformer<T, U> з методом transform(value: T): U.
// Реалізуй кілька прикладів трансформацій: — рядок у число, — число у рядок, — об’єкт у JSON.
import TransformNumberToString from "./3_Tranformer/TransformNumberToString.js";
import TransformObjectToJSON from "./3_Tranformer/TransformObjectToJSON.js";
import TransformStringToNumber from "./3_Tranformer/TransformStringToNumber.js";
const t1 = new TransformStringToNumber();
const t2 = new TransformNumberToString();
const t3 = new TransformObjectToJSON();
console.log(t1._transform("100"));
console.log(t2._transform(50));
console.log(t3._transform({ title: "Hello" }));
