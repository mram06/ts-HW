import { IBody } from "./VehicleParts";

export default class Body implements IBody {
  include(type: string): void {
    console.log(`Body ${type} included`);
  }
}
