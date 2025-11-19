// 2. Налаштування гри GameSettings (швидкість, рівень, тип ворогів).
// Потім на  основі цього типу створити тип, що не можна змінювати під час гри.
interface IGameSettings {
  speed: number;
  level: string;
  enemiesType: "weak" | "peaceful" | "hard";
}

function beginGame(settings: Readonly<IGameSettings>) {
  console.log(
    `Level ${settings.level} started with ${settings.enemiesType} enemies.`,
    `Player speed set to ${settings.speed}`
  );
}

beginGame({ speed: 10, level: "city", enemiesType: "hard" });
