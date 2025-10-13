"use strict";
document.write(` <br>
    <div>Задача 4. Випадковим чином генерується масив номерів робочих днів, або назв вихідних, або назв святкових днів.</div>
    <div>Підрахувати чого було більше: святкових чи вихідних.</div>
    <br>`);
function getRandomDayOfWeek() {
    const randomNumber = Math.random();
    if (randomNumber < 0.3)
        return Math.floor(Math.random() * 5) + 1;
    else if (randomNumber < 0.6)
        return Math.random() > 0.5 ? "субота" : "неділя";
    else
        return Math.random() >= 0.6 ? "новий рік" : "день незалежності";
}
const daysOfWeek = [];
for (let i = 0; i < 10; i++) {
    daysOfWeek.push(getRandomDayOfWeek());
}
console.log(daysOfWeek);
function countDaysOfWeek(daysList) {
    const workingDays = daysList.reduce((prevVal, day) => (typeof day === "number" ? prevVal + 1 : prevVal), 0);
    const weekendDays = daysList.reduce((prevVal, day) => day === "субота" || day === "неділя" ? prevVal + 1 : prevVal, 0);
    const holidays = daysList.reduce((prevVal, day) => day === "новий рік" || day === "день незалежності"
        ? prevVal + 1
        : prevVal, 0);
    return { workingDays, weekendDays, holidays };
}
const countedDays = countDaysOfWeek(daysOfWeek);
let maxTypeOfDays = Object.keys(countedDays)[0];
for (const key in countedDays) {
    if (countedDays[key] > countedDays[maxTypeOfDays])
        maxTypeOfDays = key;
}
document.write(`
    <div>Робочих днів - ${countedDays.workingDays}</div>
    <div>Вихідних днів - ${countedDays.weekendDays}</div>
    <div>Святкових днів - ${countedDays.holidays}</div>
    <div>Більше було - ${maxTypeOfDays} (${countedDays[maxTypeOfDays]})</div>
  `);
