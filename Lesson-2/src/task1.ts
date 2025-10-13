document.write(
  ` <div>Задача 1. Вводиться перший номер  місяця якоїсь пори року (3,6,9,12). Визначити пору року. </div>
    <div>Передбачити перевірку і генерувати помилку якщо некоректний місяць (1-12) і генерувати помилку якщо це не перший місяць пори року.</div>
    <div>Використати never.</div>
    <br>`
);

type FirstMonthSeason = 3 | 6 | 9 | 12;

function getSeasonByFirstMonthNumber(monthNumber: FirstMonthSeason): string {
  switch (monthNumber) {
    case 3:
      return "Весна";
    case 6:
      return "Літо";
    case 9:
      return "Осінь";
    case 12:
      return "Зима";
    default:
      const exhaustiveCheck: never = monthNumber;
      if (monthNumber < 1 || monthNumber > 12)
        throw new Error(`Некоректний місяць (1-12): ${monthNumber}`);
      throw new Error(
        `Невідомий номер першого місяця пори року: ${monthNumber}`
      );
  }
}

// const monthNumber: number = parseInt(
//   prompt("Введіть перший номер місяця якоїсь пори року (3,6,9,12)")!
// );
document.write(getSeasonByFirstMonthNumber(3));
