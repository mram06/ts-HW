"use strict";
document.write(` <br>
    <div>Задача 6. Описати тип квиток (куди, ціна, піб пасажира, дата). </div>
    <div>Створити функції для перевірки цього типу (Type Guard, Assert)</div>
    <br>`);
const ticket = {
    where: "Lviv",
    fare: 600,
    name: "Petro Andreas",
    date: new Date(),
};
function assertIsTicket(value) {
    if (!(value &&
        typeof value === "object" &&
        "where" in value &&
        "fare" in value &&
        "name" in value &&
        "date" in value &&
        typeof value.where === "string" &&
        typeof value.fare === "number" &&
        typeof value.name === "string" &&
        value.date instanceof Date)) {
        throw new Error("Value is not Ticket");
    }
}
console.log(ticket);
assertIsTicket(ticket);
