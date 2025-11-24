import Body from "../Body";
import Engine from "../Engine";
import Wheels from "../Wheels";

export default interface IVehicleFactory {
  addEngine(): Engine;
  addBody(): Body;
  addWheels(): Wheels;
}
