document.write(
  ` <br>
    <div>Задача 5. Випадковим чином 10 разів генерується число або рядок «Ок».</div>
    <div>Підрахувати чого було більше чисел чи рядків і вивести останнє значення</div>
    <br>`
);

const generatedValues: Array<string | number> = [];

for (let i = 0; i < 10; i++) {
  if (Math.random() > 0.5) {
    generatedValues.push("Ok");
  } else {
    generatedValues.push(Math.round(Math.random() * 100));
  }
}
console.log(generatedValues);

const stringEntries: number = generatedValues.reduce<number>(
  (prevVal, val) => (typeof val === "string" ? prevVal + 1 : prevVal),
  0
);
const numberEntries: number = generatedValues.reduce<number>(
  (prevVal, val) => (typeof val === "number" ? prevVal + 1 : prevVal),
  0
);

document.write(`
    <div>${generatedValues}</div>
    <div>Кількість рядків: ${stringEntries}</div>
    <div>Кількість чисел: ${numberEntries}</div>
`);

if (stringEntries > numberEntries) document.write("<div>Рядків більше</div>");
else if (stringEntries < numberEntries)
  document.write("<div>Чисел більше</div>");
else document.write("<div>Чисел і рядків порівно</div>");
