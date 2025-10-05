// Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data».
// Вивести на екран усі поля та їх значення.
document.write(
  ` <br>
    <div>Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data».</div>
    <div>Вивести на екран усі поля та їх значення.</div>
    <br>`
);

localStorage.setItem(
  "data",
  JSON.stringify({
    make: "Skoda",
    model: "Karoq",
    price: 15000,
    gearbox: "DSG",
    engine: 1600,
    fuel: "petrol",
    tank: 40,
    isNew: false,
  })
);

const dataObj = JSON.parse(localStorage.getItem("data") ?? "");

const keys: string[] = Object.keys(dataObj);
keys.map((field: string) => {
  document.write(`<div>${field} - ${dataObj[field]}</div>`);
});
