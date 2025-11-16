"use strict";
function printAll(items) {
    items.forEach((item) => item._print());
}
printAll([
    {
        _print() {
            console.log("Print1");
        },
    },
    {
        _print() {
            console.log("Print2");
        },
    },
    {
        _print() {
            console.log("Print3");
        },
    },
]);
