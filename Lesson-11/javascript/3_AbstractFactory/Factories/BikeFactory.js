import Body from "../Body.js";
import Engine from "../Engine.js";
import Wheels from "../Wheels.js";
export default class BikeFactory {
    addEngine() {
        return new Engine();
    }
    addBody() {
        return new Body();
    }
    addWheels() {
        return new Wheels();
    }
}
