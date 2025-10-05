document.write(
  ` <br>
    <div>Задача 6. Вводиться сума грошей і позначення валюти.</div>
    <div>Потрібно перевести у інші валюти ("USD" , "EUR" , "UAH").</div>
    <div>Тобто якщо вводять гривні, то перевести у долари і євро.</div>
    <div>А якщо вводять долари, то перевести у гривні і євро. Курси валют – це константи.</div>
    <br>`
);
const USDRate: number = 41.5;
const EURRate: number = 48.5;

const sum: number = parseFloat(prompt("Введіть суму")!);
const currency: string = prompt(
  "Введіть позначення валюти (USD, UAH, EUR)"
)!.toUpperCase();

let currencyData: Array<any> = [];
switch (currency) {
  case "USD":
    currencyData.push(
      { currency: "USD", rate: sum },
      { currency: "UAH", rate: sum * USDRate },
      { currency: "EUR", rate: ((sum * USDRate) / EURRate).toFixed(2) }
    );
    break;
  case "EUR":
    currencyData.push(
      { currency: "EUR", rate: sum },
      { currency: "UAH", rate: sum * EURRate },
      { currency: "USD", rate: ((sum * EURRate) / USDRate).toFixed(2) }
    );
    break;
  case "UAH":
    currencyData.push(
      { currency: "UAH", rate: sum },
      { currency: "EUR", rate: (sum / EURRate).toFixed(2) },
      { currency: "USD", rate: (sum / USDRate).toFixed(2) }
    );
    break;
}

document.write(`
    <div>Курси валют</div>
    <div>Введена валюта ${currency}</div>
    ${currencyData.map((currency) => {
      return `<div>${currency.currency} - ${currency.rate}</div>`;
    })}`);
