export default class GameController {
    move(angle) {
        console.log(`Left stick angle: ${angle}`);
    }
    shoot(weapon) {
        console.log(`Shot with ${weapon}`);
    }
}
