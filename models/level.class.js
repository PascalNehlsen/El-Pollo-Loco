class Level {
    enemies;
    clouds;
    coins;
    bottles;
    backgroundObjects;
    level_end_x = 2200;

    constructor(enemies, coins, bottles, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.bottles = bottles;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
    }
}