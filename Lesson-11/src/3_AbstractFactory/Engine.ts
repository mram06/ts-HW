import { IEngine } from "./VehicleParts";

export default class Engine implements IEngine {
  include(volume: number): void {
    console.log(`Engine ${volume}cm3 included`);
  }
}
