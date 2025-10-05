"use strict";
// Задача 3. Вводиться назва продукту, ціна одиниці та кількість для 2-х видів товарів.
// Вивести чек про купівлю.
document.write(` <br>
    <div>Задача 3. Вводиться назва продукту, ціна одиниці та кількість для 2-х видів товарів.</div>
    <div>Вивести чек про купівлю.</div>
    <br>`);
const receiptData = [];
for (let i = 1; i <= 2; i++) {
    const productTitle = prompt(`Введіть назву для ${i} товару`);
    const productPrice = parseFloat(prompt(`Введіть ціну для ${i} товару`));
    const productCount = parseInt(prompt(`Введіть кількість для ${i} товару`));
    receiptData.push({
        id: i,
        title: productTitle,
        price: productPrice,
        count: productCount,
    });
}
console.log(receiptData);
const receiptSummary = receiptData.reduce((prevVal, product) => prevVal + product.price, 0);
document.write(`
  <div>--------receipt--------</div>
  ${receiptData.map((product) => {
    return `<div>${product.title} ------- ${product.price} (${product.count}x)</div>`;
})}
  <div>Сума ------- ${receiptSummary}</div>
  <div>-----------------------</div>
  `);
