"use strict";
// 4. Використовуючи тип параметрів createProduct (title, price,discount)
// розробити функцію, яка б формувала параметри для створення продукту.
function createProduct(title, price, discount) {
    return { title, price, discount };
}
function createProductWithArgs([title, price, discount]) {
    return { title, price, discount };
}
