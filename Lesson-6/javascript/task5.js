"use strict";
document.write(` <br>
    <div>Менеджер конфігурації. Використовується для зберігання глобальних налаштувань додатку (властивість settings, метод updateSettings, окремі методи для оновлення окремих полів).</div>
    <br>`);
class ConfigManager {
    static updateSetting(setting, value) {
        if (setting in this.settings) {
            this.settings[setting] = value;
            return console.log(this.settings);
        }
        throw new Error(`Field '${setting}' does not exist in settings`);
    }
    static updateSettings(settings) {
        this.settings = settings;
        console.log(this.settings);
    }
}
ConfigManager.settings = { locale: "", theme: "", currency: "" };
// ConfigManager.updateSettings({ locale: "uk" });
ConfigManager.updateSetting("theme", "dark");
