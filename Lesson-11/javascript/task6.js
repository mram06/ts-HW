// 🎮 4. Підключення нових пристроїв керування у грі
// У грі є система, що працює з інтерфейсом GameController
// (методи move(), shoot()), але потрібно підключити новий пристрій - наприклад,
// VRController або TouchController, які мають інші методи (gesture(), tap(), тощо).
// Створи адаптери для них, щоб вони могли працювати як стандартні контролери.
import GameController from "./6_Adapter/GameController.js";
class WheelControllerAdapter {
    constructor(gameController) {
        this.gameController = gameController;
    }
    accelerate(pressure) {
        this.gameController.move(pressure);
    }
    turnLeftWheel() {
        console.log("Turned left");
    }
    turnRightWheel() {
        console.log("Turned right");
    }
}
const steeringWheel = new WheelControllerAdapter(new GameController());
steeringWheel.accelerate(30);
