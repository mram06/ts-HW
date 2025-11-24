import House from "./House.js";
export default class HouseBuilder {
    constructor() {
        this.foundation = "basement";
        this.walls = "aeratedСoncrete";
        this.roof = "flat";
        this.windows = "uk";
        this.doors = "metal";
    }
    setFoundation(foundation) {
        this.foundation = foundation;
        return this;
    }
    setWalls(walls) {
        this.walls = walls;
        return this;
    }
    setRoof(roof) {
        this.roof = roof;
        return this;
    }
    setWindows(windows) {
        this.windows = windows;
        return this;
    }
    setDoors(doors) {
        this.doors = doors;
        return this;
    }
    build() {
        return new House(this.foundation, this.walls, this.roof, this.windows, this.doors);
    }
}
