// 🗄️ 3. Підключення до бази даних
// Опиши клас DatabaseConnection, який симулює підключення до бази даних
// (наприклад, через рядок підключення).
// Гарантуй, що незалежно від кількості викликів підключення, створюється лише один об’єкт з’єднання.
import DatabaseConnection from "./1_Singleton/DatabaseConnection";
const db = DatabaseConnection.getInstance("localhost", "3000", "v2");
console.log(db.connectDb());
const db2 = DatabaseConnection.getInstance("192.168.1.124", "1000", "v3");
console.log(db2.connectDb());
