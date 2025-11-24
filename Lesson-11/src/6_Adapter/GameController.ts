export default class GameController {
  move(angle: number) {
    console.log(`Left stick angle: ${angle}`);
  }

  shoot(weapon: string) {
    console.log(`Shot with ${weapon}`);
  }
}
