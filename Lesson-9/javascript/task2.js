"use strict";
// Задача 2. Менеджер операцій.
// Створи клас OperationManager<T>,
// який зберігає список операцій будь-якого типу
// і має метод executeAll(callback: (item: T) => void) для виконання їх усіх.
class OperationManager {
    constructor(operations) {
        this.operations = operations;
    }
    executeAll(callback) {
        return this.operations.map((op) => callback(op));
    }
}
const op1 = new OperationManager([1, 2, 3, 4, 5, 6, 7]);
const op2 = new OperationManager(["a", "b", "c", "d", "e", "f", "g"]);
console.log(op1.executeAll((item) => item * 2));
console.log(op2.executeAll((item) => item + "b"));
