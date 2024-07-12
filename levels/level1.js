let level1;

function initlevel() {
    level1 = new Level(
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

        [
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud()
        ],
        [
            new BackgroundObject(
                './img/5_background/layers/air.png',
                -720,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/3_third_layer/2.png',
                -720,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/2_second_layer/2.png',
                -720,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/1_first_layer/2.png',
                -720,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/air.png',
                0,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/3_third_layer/1.png',
                0,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/2_second_layer/1.png',
                0,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/1_first_layer/1.png',
                0,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/air.png',
                720,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/3_third_layer/2.png',
                720,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/2_second_layer/2.png',
                720,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/1_first_layer/2.png',
                720,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/air.png',
                1440,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/3_third_layer/1.png',
                1440,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/2_second_layer/1.png',
                1440,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/1_first_layer/1.png',
                1440,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/air.png',
                2160,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/3_third_layer/2.png',
                2160,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/2_second_layer/2.png',
                2160,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/1_first_layer/2.png',
                2160,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/air.png',
                2880,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/3_third_layer/1.png',
                2880,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/2_second_layer/1.png',
                2880,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/1_first_layer/1.png',
                2880,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/air.png',
                3600,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/3_third_layer/2.png',
                3600,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/2_second_layer/2.png',
                3600,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/1_first_layer/2.png',
                3600,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/air.png',
                4320,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/3_third_layer/1.png',
                4320,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/2_second_layer/1.png',
                4320,
                0
            ),
            new BackgroundObject(
                './img/5_background/layers/1_first_layer/1.png',
                4320,
                0
            ),
        ]);
}