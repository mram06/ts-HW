"use strict";
document.write(` <br>
    <div>Задача 3. Вводиться номер місяця або назва місяця. </div>
    <div>Створити функцію, яка повинна повертати номер пори року (1-4) якщо передаємо число, або назву пори року, якщо було введено назву місяця. </div>
    <div>Використати перевантаження функцій.</div>
    <br>`);
function getSeason(season) {
    if (typeof season === "number") {
        switch (season) {
            case 12:
            case 1:
            case 2:
                return 1;
            case 3:
            case 4:
            case 5:
                return 2;
            case 6:
            case 7:
            case 8:
                return 3;
            case 9:
            case 10:
            case 11:
                return 4;
        }
    }
    switch (season) {
        case "Грудень":
        case "Січень":
        case "Лютий":
            return "Зима";
        case "Березень":
        case "Квітень":
        case "Травень":
            return "Весна";
        case "Червень":
        case "Липень":
        case "Серпень":
            return "Літо";
        case "Вересень":
        case "Жовтень":
        case "Листопад":
            return "Осінь";
    }
    return 404;
}
document.write(getSeason("Жовтень").toString());
