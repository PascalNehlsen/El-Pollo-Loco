class Level {
    enemies;
    clouds;
    coins;
    bottles;
    backgroundObjects;
    level_end_x = 2200;

    constructor(enemies, bottles, coins, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.bottles = bottles;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
    }
}