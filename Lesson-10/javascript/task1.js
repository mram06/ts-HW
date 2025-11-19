"use strict";
// 1. Чернетка товару:
// Описати тип Auto (id, марка, колір, рік_випуску, власник).
// Потім описати DraftAuto для збереження неповних описів даних про авто у localStorage.
const auto1 = {
    id: 1,
    make: "Rivian",
    year: 2023,
};
function saveAuto(auto) {
    localStorage.setItem("autoData", JSON.stringify(auto));
}
saveAuto(auto1);
console.log(localStorage.getItem("autoData"));
