document.write(
  ` <br>
    <div>Менеджер конфігурації. Використовується для зберігання глобальних налаштувань додатку (властивість settings, метод updateSettings, окремі методи для оновлення окремих полів).</div>
    <br>`
);

class ConfigManager {
  public static settings: object = { locale: "", theme: "", currency: "" };

  static updateSetting(setting: string, value: string) {
    if (setting in this.settings) {
      (this.settings as any)[setting] = value;
      return console.log(this.settings);
    }

    throw new Error(`Field '${setting}' does not exist in settings`);
  }

  static updateSettings(settings: object) {
    this.settings = settings;
    console.log(this.settings);
  }
}

// ConfigManager.updateSettings({ locale: "uk" });
ConfigManager.updateSetting("theme", "dark");
