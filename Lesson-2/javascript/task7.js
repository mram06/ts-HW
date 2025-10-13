"use strict";
document.write(` <br>
    <div>Задача 7. Згенерувати масив нагород (золота, срібна, бронзова медалі та грамота). </div>
    <div>Підрахувати кількість кожної з нагород.</div>
    <div>Використати enum. Можете і never якось застосувати</div>
    <br>`);
var Awards;
(function (Awards) {
    Awards["Gold"] = "\u0417\u043E\u043B\u043E\u0442\u043E";
    Awards["Silver"] = "\u0421\u0440\u0456\u0431\u043B\u043E";
    Awards["Bronze"] = "\u0411\u0440\u043E\u043D\u0437\u0430";
    Awards["Charter"] = "\u0413\u0440\u0430\u043C\u043E\u0442\u0430";
})(Awards || (Awards = {}));
function getAwardsList(count) {
    const awardsList = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.random();
        if (randomNumber < 0.25)
            awardsList.push(Awards.Gold);
        else if (randomNumber < 0.5)
            awardsList.push(Awards.Silver);
        else if (randomNumber < 0.75)
            awardsList.push(Awards.Bronze);
        else
            awardsList.push(Awards.Charter);
    }
    return awardsList;
}
const awardsList = getAwardsList(10);
const goldAwardCount = awardsList.reduce((prevVal, award) => (award === Awards.Gold ? prevVal + 1 : prevVal), 0);
const silverAwardCount = awardsList.reduce((prevVal, award) => (award === Awards.Silver ? prevVal + 1 : prevVal), 0);
const bronzeAwardCount = awardsList.reduce((prevVal, award) => (award === Awards.Bronze ? prevVal + 1 : prevVal), 0);
const charterAwardCount = awardsList.reduce((prevVal, award) => (award === Awards.Charter ? prevVal + 1 : prevVal), 0);
document.write(`
  <div>Масив грамот: ${awardsList}</div>
  <div>Золото: ${goldAwardCount}</div>
  <div>Срібло: ${silverAwardCount}</div>
  <div>Бронза: ${bronzeAwardCount}</div>
  <div>Грамота: ${charterAwardCount}</div>`);
