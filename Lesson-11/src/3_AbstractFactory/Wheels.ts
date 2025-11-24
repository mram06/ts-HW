import { IWheels } from "./VehicleParts";

export default class Wheels implements IWheels {
  include(count: number): void {
    console.log(`${count} wheels included`);
  }
}
