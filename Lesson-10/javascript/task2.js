"use strict";
function beginGame(settings) {
    console.log(`Level ${settings.level} started with ${settings.enemiesType} enemies.`, `Player speed set to ${settings.speed}`);
}
beginGame({ speed: 10, level: "city", enemiesType: "hard" });
