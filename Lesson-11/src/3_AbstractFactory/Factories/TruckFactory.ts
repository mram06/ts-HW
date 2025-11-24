import Body from "../Body.js";
import Engine from "../Engine.js";
import Wheels from "../Wheels.js";
import IVehicleFactory from "./IVehicleFactory.js";

export default class TruckFactory implements IVehicleFactory {
  addEngine(): Engine {
    return new Engine();
  }
  addBody(): Body {
    return new Body();
  }
  addWheels(): Wheels {
    return new Wheels();
  }
}
