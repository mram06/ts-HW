// Задача 4. Обмеження для типів, що реалізують інтерфейс.
// Створи інтерфейс Printable з методом print(): void.
// Опиши узагальнену функцію printAll<T extends Printable>(items: T[]),
// яка викликає метод print() для кожного елемента масиву.
interface IPrintable {
  _print(): void;
}

function printAll<T extends IPrintable>(items: T[]) {
  items.forEach((item) => item._print());
}

printAll([
  {
    _print() {
      console.log("Print1");
    },
  },
  {
    _print() {
      console.log("Print2");
    },
  },
  {
    _print() {
      console.log("Print3");
    },
  },
]);
