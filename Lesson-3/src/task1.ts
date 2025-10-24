document.write(
  ` <div>Задача 1. Створити два інтерфейс студента (піб, курс, факультет).</div>
    <div>На основі цього інтерфейсу створити інтерфейс старости (додати поле з номером групи)</div>
    <br>`
);

interface IStudent {
  name: string;
  lastName: string;
}

interface IStudent {
  year: number;
  faculty: string;
}

interface IGroupLeader extends IStudent {
  group: number | string;
}

const student: IStudent = {
  name: "Pavlo",
  lastName: "Koval",
  year: 4,
  faculty: "Information technologies",
};

const groupLeader: IGroupLeader = {
  name: "Alex",
  lastName: "Ivanov",
  year: 4,
  faculty: "Marketing",
  group: 492,
};

console.log(student);
console.log(groupLeader);
