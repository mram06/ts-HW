import IClonable from "./ICLonable";

export default class GameCharacter implements IClonable<GameCharacter> {
  constructor(
    public name: string = "hostileNPC",
    public level: number = 19,
    public skills: string[] = ["fastRun", "driving", "piloting"],
    public inventory: string[] = ["knife"]
  ) {}

  clone(): GameCharacter {
    return new GameCharacter(
      this.name,
      this.level,
      this.skills,
      this.inventory
    );
  }
}
