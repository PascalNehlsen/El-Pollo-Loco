/**
 * Represents a coin object in the game, extending the MovableObject class.
 * @extends MovableObject
 */
class Coin extends MovableObject {
    /**
     * Width of the coin object.
     * @type {number}
     */
    width = 120;

    /**
     * Height of the coin object.
     * @type {number}
     */
    height = 120;

    /**
     * Array of paths to images used for animating the coin.
     * @type {string[]}
     */
    imagesCoin = [
        './img/8_coin/coin_1.png',
        './img/8_coin/coin_2.png',
    ];

    /**
     * Offset values for the collision box of the coin.
     * @type {{left: number, top: number, right: number, bottom: number}}
     */
    offset = {
        left: 40,
        top: 40,
        right: 40,
        bottom: 40
    };

    /**
     * Constructs a new instance of Coin.
     */
    constructor() {
        super().loadImage(
            './img/8_coin/coin_1.png'
        );
        this.loadImages(this.imagesCoin);
        this.x = 300 + Math.random() * 3500;
        this.y = Math.random() * 340;
        this.animate();
    }

    /**
     * Initiates animation for the coin, playing its animation frames periodically.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesCoin);
        }, 1000); // Every 1000ms (1 second)
    }
}
