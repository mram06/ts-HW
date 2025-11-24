export default class MusicSystem {
  turnOn(volume: number, mode: string) {
    console.log(`[Music]: system is on, volume - ${volume}%, mode - ${mode}`);
  }
  turnOff() {
    console.log("[Music]: system is off");
  }
}
