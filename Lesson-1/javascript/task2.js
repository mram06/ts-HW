"use strict";
var _a;
// Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data».
// Вивести на екран усі поля та їх значення.
document.write(` <br>
    <div>Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data».</div>
    <div>Вивести на екран усі поля та їх значення.</div>
    <br>`);
localStorage.setItem("data", JSON.stringify({
    make: "Skoda",
    model: "Karoq",
    price: 15000,
    gearbox: "DSG",
    engine: 1600,
    fuel: "petrol",
    tank: 40,
    isNew: false,
}));
const dataObj = JSON.parse((_a = localStorage.getItem("data")) !== null && _a !== void 0 ? _a : "");
const keys = Object.keys(dataObj);
keys.map((field) => {
    document.write(`<div>${field} - ${dataObj[field]}</div>`);
});
