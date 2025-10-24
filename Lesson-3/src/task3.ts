document.write(
  ` <br>
    <div>Задача 3. Задача “Події календаря”.  Кожна подія може бути mandatory або optional. </div>
    <div>Події можуть бути Meeting (має participants), Deadline (має dueDate), Reminder (має note).</div>
    <div>Створити тип CalendarEvent, який об’єднує тип події та її важливість, використовуючи перетини та об’єднання типів.</div>
    <br>`
);

type Meeting = { participants: string[] };
type Deadline = { dueDate: Date };
type Reminder = { note: string };

type CalendarEvent = Meeting &
  Deadline &
  Reminder & { type: "mandatory" | "optional" };

const testEvent: CalendarEvent = {
  participants: ["participant1", "participant2"],
  dueDate: new Date(),
  note: "developing strategy",
  type: "mandatory",
};

console.log(testEvent);
