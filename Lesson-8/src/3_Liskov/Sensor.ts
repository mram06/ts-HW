export default abstract class Sensor {
  protected _isOn: boolean = false;

  turnOn() {
    this._isOn = true;
    console.log("✅ Sensor turned ON");
  }
  turnOff() {
    this._isOn = false;
    console.log("⚙️ Sensor turned OFF");
  }
  getValue() {
    if (this._isOn === false)
      throw new Error("Sensor offline! Cannot read value.");
    else return Math.random() * 100;
  }
}
