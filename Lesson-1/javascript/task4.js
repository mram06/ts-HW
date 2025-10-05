"use strict";
document.write(` <br>
    <div>Задача 4. Вводиться номер дня або назва дня.</div>
    <div>Створити функцію, яка за цим значенням виводить на екран чи це робочий день.</div>
    <br>`);
let definedDay;
function defineDayOfWeek(day) {
    const dayNumber = parseInt(day);
    if (dayNumber) {
        switch (dayNumber) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                definedDay = "Робочий день";
                break;
            case 6:
            case 7:
                definedDay = "Вихідний день";
                break;
            default:
                definedDay = "Не вірна назва дня";
                break;
        }
    }
    else if (typeof day === "string") {
        switch (day.toLowerCase()) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                definedDay = "Робочий день";
                break;
            case "saturday":
            case "sunday":
                definedDay = "Вихідний день";
                break;
            default:
                definedDay = "Не вірна назва дня";
                break;
        }
    }
    document.write(`
    <div>Введений день: ${day}</div>
    <div>Результат: ${definedDay}</div>
    `);
}
const userDay = prompt("Введіть назву або номер дня (1-7), (sunday, monday, tuesday, wednesday, thursday, friday, saturday)");
defineDayOfWeek(userDay);
