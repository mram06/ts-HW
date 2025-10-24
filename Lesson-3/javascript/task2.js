"use strict";
document.write(` <br>
    <div>Задача 2. Створіть union-тип для трьох типів : car (модель, власник), bus (компанія, кількість місць), airplane (швидкість, тип палива). Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт.</div>
    <br>`);
function showVehicleInfo(vehicle) {
    switch (vehicle.type) {
        case "car":
            document.write(`<div>${vehicle.type} - ${vehicle.model} - ${vehicle.owner}</div>`);
            break;
        case "bus":
            document.write(`<div>${vehicle.type} - ${vehicle.company} - ${vehicle.seats}</div>`);
            break;
        case "airplane":
            document.write(`<div>${vehicle.type} - ${vehicle.speed} - ${vehicle.fuelType}</div>`);
            break;
        default:
            const _exCheck = vehicle;
            throw new Error(`Unknown type: ${vehicle}`);
    }
}
const car = {
    type: "car",
    model: "FJ Cruiser",
    owner: "Vasyl",
};
const bus = {
    type: "bus",
    company: "Flixbus",
    seats: 50,
};
const airplane = {
    type: "airplane",
    speed: 500,
    fuelType: "kerosene",
};
showVehicleInfo(car);
showVehicleInfo(bus);
showVehicleInfo(airplane);
