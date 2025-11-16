// Задача 1. Отримання випадкового елемента.
// Опиши функцію getRandom<T>, яка приймає масив будь-якого типу та повертає випадковий елемент з нього.

function getRandom<T>(list: T[]): T {
  const randIndex = Math.floor(Math.random() * (list.length - 1));
  return list[randIndex];
}

console.log(getRandom([1, 3, 5, 6, 2, 9, 7]));
console.log(getRandom(["a", "b", "c", "d", "e", "f", "g"]));
