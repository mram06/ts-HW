export default class GameCharacter {
    constructor(name = "hostileNPC", level = 19, skills = ["fastRun", "driving", "piloting"], inventory = ["knife"]) {
        this.name = name;
        this.level = level;
        this.skills = skills;
        this.inventory = inventory;
    }
    clone() {
        return new GameCharacter(this.name, this.level, this.skills, this.inventory);
    }
}
