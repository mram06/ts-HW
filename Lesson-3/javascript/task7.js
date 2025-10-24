"use strict";
document.write(` <br>
    <div>Задача 7. Описати тип «журнал учня» (3 поля-масиви з оцінками ). </div>
    <div>Потім на основі цього типу створити тип «менеджер оцінок» (додати методи знаходження середньої оцінки і найбільшої оцінки)</div>
    <br>`);
const journal = {
    math: [10, 9, 5, 7, 8],
    history: [6, 5, 7, 10, 12],
    sport: [7, 8, 4, 7, 10],
    getAverage(marks) {
        return (marks.reduce((prevSum, mark) => prevSum + mark, 0) / marks.length);
    },
    getHighest(marks) {
        return marks.reduce((prevMark, mark) => mark > prevMark ? (prevMark = mark) : prevMark, 0);
    },
};
console.log("average:", journal.getAverage(journal.math));
console.log("highest:", journal.getHighest(journal.history));
