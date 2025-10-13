"use strict";
document.write(` <br>
    <div>Задача 2. Створити функцію, яка дозволяє знайти або останню цифру числа, або останній символ числа.</div>
    <br>`);
function determineLastSymbolOfNumber(num) {
    if (typeof num === "number")
        return num % 10;
    return num.slice(-1);
}
document.write(`
    <div>Число: 124241, результат -
    ${determineLastSymbolOfNumber(124241).toString()}</div>
    <div>Число: "532523", результат -
    ${determineLastSymbolOfNumber("532523")}</div>
  `);
