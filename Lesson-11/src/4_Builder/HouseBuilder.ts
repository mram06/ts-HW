import House from "./House.js";

export default class HouseBuilder {
  public foundation: string = "basement";
  public walls: string = "aeratedСoncrete";
  public roof: string = "flat";
  public windows: string = "uk";
  public doors: string = "metal";

  setFoundation(foundation: string) {
    this.foundation = foundation;
    return this;
  }
  setWalls(walls: string) {
    this.walls = walls;
    return this;
  }
  setRoof(roof: string) {
    this.roof = roof;
    return this;
  }
  setWindows(windows: string) {
    this.windows = windows;
    return this;
  }
  setDoors(doors: string) {
    this.doors = doors;
    return this;
  }

  build(): House {
    return new House(
      this.foundation,
      this.walls,
      this.roof,
      this.windows,
      this.doors
    );
  }
}
