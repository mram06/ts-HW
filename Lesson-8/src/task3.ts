// Задача 3. (Liskov Substitution Principle)
// Сенсори у системі моніторингу (з можливістю вмикати/вимикати):
// Є базовий клас Sensor із методом getValue() і методами увімкнення/вимкнення.
// Підклас OfflineSensor повертає помилку замість числового значення, якщо вимкнений.
// ❌ Порушення LSP — клієнтський код очікує завжди число, але отримує виняток

// class SensorBad {
//   private _isOn: boolean = true;

//   turnOn() {
//     this._isOn = true;
//     console.log("✅ Sensor turned ON");
//   }
//   turnOff() {
//     this._isOn = false;
//     console.log("⚙️ Sensor turned OFF");
//   }

//   getValue(): number {
// навіть якщо сенсор "вимкнений", базовий клас усе одно повертає значення
//     return Math.random() * 100;
//   }
// }

// class OfflineSensorBad extends SensorBad {
//   getValue(): number {
// ❌ Порушення LSP — поведінка змінюється: замість числа — помилка
//     throw new Error("Sensor offline! Cannot read value.");
//   }
// }
import Sensor from "./3_Liskov/Sensor.js";

class OfflineSensor extends Sensor {}

const sensor = new OfflineSensor();
sensor.turnOn();
console.log(sensor.getValue());
