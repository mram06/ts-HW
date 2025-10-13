"use strict";
document.write(` <br>
    <div>Задача 5. Дано набір налаштувань (ключ-значення(enabled/disabled)). </div>
    <div>Вивести ті, які є увімкненими</div>
    <br>`);
var Settings;
(function (Settings) {
    Settings["Timer"] = "enabled";
    Settings["WiFi"] = "enabled";
    Settings["Bluetooth"] = "disabled";
    Settings["VPN"] = "disabled";
    Settings["Hotspot"] = "enabled";
})(Settings || (Settings = {}));
Object.keys(Settings).forEach((setting) => {
    const settingKey = setting;
    if (Settings[settingKey] === "enabled") {
        document.write(`<div>${setting}</div>`);
    }
});
