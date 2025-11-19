"use strict";
// 5. Розробити функції для збереження/зчитування/перевірки якихось даних у localStorage.
// Додати опис у коментарях та створити автоматично документацію.
/**
 * Сервіс для роботи з localStorage
 * Надає методи для збереження, зчитування та валідації даних
 * @class LocalStorageService
 */
class LocalStorageService {
    /**
     * Зберігає об'єкт в localStorage у форматі JSON
     * @param {string} key - Ключ для збереження даних
     * @param {object} data - Об'єкт, який потрібно зберегти
     * @returns {void}
     * @example
     * LocalStorageService.saveData('user', { name: 'John', age: 30 });
     */
    static saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    /**
     * Зчитує дані з localStorage та парсить їх з JSON
     * @param {string} key - Ключ для зчитування даних
     * @returns {any | null} Розпарсений об'єкт або null, якщо дані не знайдено
     * @example
     * const user = LocalStorageService.readData('user');
     * console.log(user); // { name: 'John', age: 30 }
     */
    static readData(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
    /**
     * Перевіряє наявність та значення конкретного поля в збережених даних
     * @param {string} key - Ключ збережених даних
     * @param {string} field - Назва поля для перевірки
     * @returns {boolean} true, якщо поле існує та має truthy значення
     * @example
     * LocalStorageService.validateField('user', 'name'); // true
     * LocalStorageService.validateField('user', 'email'); // false
     */
    static validateField(key, field) {
        const data = this.readData(key);
        return data && !!data[field];
    }
}
LocalStorageService.saveData("savedData", { title: "Hello world" });
console.log(LocalStorageService.readData("savedData"));
console.log(LocalStorageService.validateField("savedData", "title"));
