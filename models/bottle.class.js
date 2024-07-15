/**
 * Represents a bottle object in the game, extending the MovableObject class.
 * @extends MovableObject
 */
class Bottle extends MovableObject {
    /**
     * Width of the bottle object.
     * @type {number}
     */
    width = 80;

    /**
     * Height of the bottle object.
     * @type {number}
     */
    height = 80;

    /**
     * Array of paths to images used for the bottle object.
     * @type {string[]}
     */
    imagesBottle = [
        './img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        './img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    /**
     * Offset values for the collision box of the bottle.
     * @type {{left: number, top: number, right: number, bottom: number}}
     */
    offset = {
        left: 25,
        top: 15,
        right: 25,
        bottom: 10
    };

    /**
     * Constructs a new instance of Bottle.
     * @param {string} imagePath - Path to the image of the bottle object.
     */
    constructor(imagePath) {
        super().loadImage(imagePath);
        this.x = 300 + Math.random() * 3500;
        this.y = 350;
    }
}
