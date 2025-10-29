"use strict";
document.write(` <br>
    <div>Задача 6. Описати тип квиток (куди, ціна, піб пасажира, дата). </div>
    <div>Створити функції для перевірки цього типу (Type Guard, Assert)</div>
    <br>`);
const ticket1 = {
    where: "Kyiv",
    price: "500",
    name: "Olga",
    date: new Date(),
};
function assertIsTicket1(value) {
    if (!(value &&
        typeof value === "object" &&
        "where" in value &&
        "price" in value &&
        "name" in value &&
        "date" in value &&
        typeof value.where === "string" &&
        typeof value.price === "number" &&
        typeof value.name === "string" &&
        value.date instanceof Date))
        throw new Error("Value is not type Ticket");
}
assertIsTicket1(ticket1);
