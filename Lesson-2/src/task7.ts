document.write(
  ` <br>
    <div>Задача 7. Згенерувати масив нагород (золота, срібна, бронзова медалі та грамота). </div>
    <div>Підрахувати кількість кожної з нагород.</div>
    <div>Використати enum. Можете і never якось застосувати</div>
    <br>`
);

type Award = string;

enum Awards {
  Gold = "Золото",
  Silver = "Срібло",
  Bronze = "Бронза",
  Charter = "Грамота",
}

function getAwardsList(count: number): Award[] {
  const awardsList: Award[] = [];

  for (let i = 0; i < count; i++) {
    const randomNumber = Math.random();
    if (randomNumber < 0.25) awardsList.push(Awards.Gold);
    else if (randomNumber < 0.5) awardsList.push(Awards.Silver);
    else if (randomNumber < 0.75) awardsList.push(Awards.Bronze);
    else awardsList.push(Awards.Charter);
  }

  return awardsList;
}

const awardsList = getAwardsList(10);

const goldAwardCount = awardsList.reduce(
  (prevVal, award) => (award === Awards.Gold ? prevVal + 1 : prevVal),
  0
);
const silverAwardCount = awardsList.reduce(
  (prevVal, award) => (award === Awards.Silver ? prevVal + 1 : prevVal),
  0
);
const bronzeAwardCount = awardsList.reduce(
  (prevVal, award) => (award === Awards.Bronze ? prevVal + 1 : prevVal),
  0
);
const charterAwardCount = awardsList.reduce(
  (prevVal, award) => (award === Awards.Charter ? prevVal + 1 : prevVal),
  0
);

document.write(`
  <div>Масив грамот: ${awardsList}</div>
  <div>Золото: ${goldAwardCount}</div>
  <div>Срібло: ${silverAwardCount}</div>
  <div>Бронза: ${bronzeAwardCount}</div>
  <div>Грамота: ${charterAwardCount}</div>`);
