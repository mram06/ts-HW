// 3. Мінімальні дані для таблиці.
// Дано тип Employee, що містить опис (перелік) полів,
// що можуть бути у працівника
// (ім'я, рік_народження, заробітна плата, стаж, підрозділ, адреса, спеціальність).
// Потім на основі цього типу створи новий тип даних,
// що буде містити тільки ім'я, підрозділ та заробітну плату)

interface IEmployee {
  name: string;
  birthYear: number;
  salary: number;
  experience: number;
  department: string;
  address: string;
  profession: string;
}

type ShortEmployee = Pick<IEmployee, "name" | "department" | "salary">;

const e1: ShortEmployee = {
  name: "Vasyl",
  department: "IT",
  salary: 3000,
};

console.log(e1);
