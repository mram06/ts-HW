// ☕ 1. Кавомашина (Coffee Shop)
// Створи базовий клас Coffee, який має метод getCost() і getDescription().
// Реалізуй декоратори (MilkDecorator, SugarDecorator, ChocolateDecorator),
// які додають нові властивості до базового напою.  Мета - показати,
// як послідовно додавати функціональність об’єктам без множинного успадкування.
import Coffee from "./8_Decorator/Coffee.js";
import MilkDecorator from "./8_Decorator/MilkDecorator.js";
const service = new MilkDecorator(new Coffee());
service.getCost();
service.getDescription();
