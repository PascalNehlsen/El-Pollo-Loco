/**
 * Represents the current level of the game.
 * @type {Level}
 */
let level1;

/**
 * Initializes the first level of the game with specified entities and backgrounds.
 */
function initlevel() {
    level1 = new Level(
        // Array of entities (chickens and end boss)
        [
            new BabyChicken(),
            new BabyChicken(),
            new BabyChicken(),
            new BabyChicken(),
            new BabyChicken(),
            new BabyChicken(),
            new BabyChicken(),
            new BabyChicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Endboss(),
        ],
        // Array of bottles
        [
            new Bottle('./img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottle('./img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottle('./img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottle('./img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottle('./img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottle('./img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottle('./img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottle('./img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottle('./img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottle('./img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottle('./img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottle('./img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottle('./img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottle('./img/6_salsa_bottle/2_salsa_bottle_on_ground.png')
        ],
        // Array of coins
        [
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin()
        ],
        // Array of clouds
        [
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud()
        ],
        // Array of background objects
        [
            new BackgroundObject('./img/5_background/layers/air.png', -720, 0),
            new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', -720, 0),
            new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', -720, 0),
            new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', -720, 0),
            new BackgroundObject('./img/5_background/layers/air.png', 0, 0),
            new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 0, 0),
            new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 0, 0),
            new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 0, 0),
            new BackgroundObject('./img/5_background/layers/air.png', 720, 0),
            new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 720, 0),
            new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 720, 0),
            new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 720, 0),
            new BackgroundObject('./img/5_background/layers/air.png', 1440, 0),
            new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 1440, 0),
            new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 1440, 0),
            new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 1440, 0),
            new BackgroundObject('./img/5_background/layers/air.png', 2160, 0),
            new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 2160, 0),
            new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 2160, 0),
            new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 2160, 0),
            new BackgroundObject('./img/5_background/layers/air.png', 2880, 0),
            new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 2880, 0),
            new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 2880, 0),
            new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 2880, 0),
            new BackgroundObject('./img/5_background/layers/air.png', 3600, 0),
            new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 3600, 0),
            new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 3600, 0),
            new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 3600, 0),
            new BackgroundObject('./img/5_background/layers/air.png', 4320, 0),
            new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 4320, 0),
            new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 4320, 0),
            new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 4320, 0),
        ]
    );
}
