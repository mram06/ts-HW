"use strict";
document.write(` <br>
    <div>Задача 3. Задача “Події календаря”.  Кожна подія може бути mandatory або optional. </div>
    <div>Події можуть бути Meeting (має participants), Deadline (має dueDate), Reminder (має note).</div>
    <div>Створити тип CalendarEvent, який об’єднує тип події та її важливість, використовуючи перетини та об’єднання типів.</div>
    <br>`);
const testEvent = {
    participants: ["participant1", "participant2"],
    dueDate: new Date(),
    note: "developing strategy",
    type: "mandatory",
};
console.log(testEvent);
