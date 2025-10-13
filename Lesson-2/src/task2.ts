document.write(
  ` <br>
    <div>Задача 2. Створити функцію, яка дозволяє знайти або останню цифру числа, або останній символ числа.</div>
    <br>`
);

function determineLastSymbolOfNumber(num: number): number;
function determineLastSymbolOfNumber(num: string): number;

function determineLastSymbolOfNumber(num: number | string): number | string {
  if (typeof num === "number") return num % 10;
  return num.slice(-1);
}

document.write(
  `
    <div>Число: 124241, результат -
    ${determineLastSymbolOfNumber(124241).toString()}</div>
    <div>Число: "532523", результат -
    ${determineLastSymbolOfNumber("532523")}</div>
  `
);
