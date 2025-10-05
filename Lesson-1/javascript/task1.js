"use strict";
var _a;
// Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data».
// Проаналізувати значення поля «field2».
// Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.
document.write(` <div>Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data».</div>
    <div>Проаналізувати значення поля «field2».</div>
    <div>Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.</div>
    <br>`);
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}
localStorage.setItem("data", JSON.stringify({
    field2: Math.random() > 0.5 ? "something" : getRandomNumber(10, 30),
}));
const data = JSON.parse((_a = localStorage.getItem("data")) !== null && _a !== void 0 ? _a : "");
const field2 = data.field2;
if (typeof field2 === "number") {
    if (field2 % 2 === 0)
        document.write(`<div>${field2}, Число парне</div>`);
    else
        document.write(`<div>${field2}, Число не парне</div>`);
}
else if (typeof field2 === "string") {
    document.write(`<div>${field2}, довжина ${field2.length} символів</div>`);
}
