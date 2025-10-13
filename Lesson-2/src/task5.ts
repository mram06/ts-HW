document.write(
  ` <br>
    <div>Задача 5. Дано набір налаштувань (ключ-значення(enabled/disabled)). </div>
    <div>Вивести ті, які є увімкненими</div>
    <br>`
);

enum Settings {
  Timer = "enabled",
  WiFi = "enabled",
  Bluetooth = "disabled",
  VPN = "disabled",
  Hotspot = "enabled",
}

Object.keys(Settings).forEach((setting) => {
  const settingKey = setting as keyof typeof Settings;
  if (Settings[settingKey] === "enabled") {
    document.write(`<div>${setting}</div>`);
  }
});
