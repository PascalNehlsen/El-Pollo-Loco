/**
 * Represents a level in the game.
 */
class Level {
    /**
     * Array containing enemies in the level.
     * @type {MovableObject[]}
     */
    enemies;

    /**
     * Array containing cloud objects in the level.
     * @type {Cloud[]}
     */
    clouds;

    /**
     * Array containing coin objects in the level.
     * @type {Coin[]}
     */
    coins;

    /**
     * Array containing bottle objects in the level.
     * @type {Bottle[]}
     */
    bottles;

    /**
     * Array containing background objects in the level.
     * @type {BackgroundObject[]}
     */
    backgroundObjects;

    /**
     * X-coordinate where the level ends.
     * @type {number}
     */
    level_end_x = 4200;

    /**
     * Constructs a new instance of Level with specified objects.
     * @param {MovableObject[]} enemies - Array of enemy objects.
     * @param {Bottle[]} bottles - Array of bottle objects.
     * @param {Coin[]} coins - Array of coin objects.
     * @param {Cloud[]} clouds - Array of cloud objects.
     * @param {BackgroundObject[]} backgroundObjects - Array of background objects.
     */
    constructor(enemies, bottles, coins, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.bottles = bottles;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
    }
}
