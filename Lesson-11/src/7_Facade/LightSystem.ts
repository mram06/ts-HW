export default class LightSystem {
  turnOn(mode: string) {
    console.log(`[Lightning]: system is on, mode: ${mode}`);
  }
  turnOff(): void {
    console.log("[Lightning]: system is off");
  }
}
