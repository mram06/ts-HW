import HeatingSystem from "./7_Facade/HeatingSystem.js";
import LightSystem from "./7_Facade/LightSystem.js";
import MusicSystem from "./7_Facade/MusicSystem.js";
import SecuritySystem from "./7_Facade/SecuritySystem.js";
// 🏠 5. Фасад для "розумного дому" (SmartHome)
// Є пристрої:
// LightSystem,
// HeatingSystem,
// SecuritySystem,
// MusicSystem.
// Реалізуй SmartHomeFacade з методами activateMorningMode(), activateNightMode(), leaveHome(),
// які керують кількома пристроями одночасно.
class SmartHomeFacade {
    constructor() {
        this.lighting = new LightSystem();
        this.heating = new HeatingSystem();
        this.security = new SecuritySystem();
        this.music = new MusicSystem();
    }
    activateMorningMode() {
        this.lighting.turnOn("fade");
        this.heating.setLevel(3);
        this.music.turnOn(30, "playlist");
    }
    activateNightMode() {
        this.lighting.turnOff();
        this.heating.setLevel(5);
        this.music.turnOff();
    }
    leaveHome() {
        this.lighting.turnOff();
        this.heating.setLevel(2);
        this.security.turnOn();
        this.music.turnOff();
    }
}
const smartHome = new SmartHomeFacade();
smartHome.leaveHome();
