"use strict";
document.write(` <div>Задача 1. Створити два інтерфейс студента (піб, курс, факультет).</div>
    <div>На основі цього інтерфейсу створити інтерфейс старости (додати поле з номером групи)</div>
    <br>`);
const student = {
    name: "Pavlo",
    lastName: "Koval",
    year: 4,
    faculty: "Information technologies",
};
const groupLeader = {
    name: "Alex",
    lastName: "Ivanov",
    year: 4,
    faculty: "Marketing",
    group: 492,
};
console.log(student);
console.log(groupLeader);
