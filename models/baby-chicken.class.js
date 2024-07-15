/**
 * Represents a baby chicken in the game, extending the MovableObject class.
 * @extends MovableObject
 */
class BabyChicken extends MovableObject {
    /**
     * Width of the baby chicken.
     * @type {number}
     */
    width = 50;

    /**
     * Height of the baby chicken.
     * @type {number}
     */
    height = 50;

    /**
     * Initial vertical position of the baby chicken.
     * @type {number}
     */
    y = 380;

    /**
     * Array of paths to images used when the chicken is walking.
     * @type {string[]}
     */
    imagesWalking = [
        './img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    /**
     * Array of paths to images used when the chicken is dead.
     * @type {string[]}
     */
    imagesDead = [
        './img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    /**
     * Offset values for the collision box of the chicken.
     * @type {{left: number, top: number, right: number, bottom: number}}
     */
    offset = {
        left: 0,
        top: 2,
        right: 0,
        bottom: 5
    };

    /**
     * Constructs a new instance of BabyChicken.
     */
    constructor() {
        super().loadImage(
            './img/3_enemies_chicken/chicken_small/1_walk/1_w.png'
        );
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesDead);

        this.speed = 0.15 + Math.random() * 1;
        this.x = 2000 + Math.random() * 4100;
        this.animate();
    }

    /**
     * Initiates animations for the baby chicken.
     */
    animate() {
        this.moveBabyChicken();
        this.playChickenAnimations();
    }

    /**
     * Plays walking or dead animations based on chicken's energy level.
     */
    playChickenAnimations() {
        setInterval(() => {
            if (this.energy === 0) {
                this.playAnimation(this.imagesDead);
            } else {
                this.playAnimation(this.imagesWalking);
            }
        }, 200);
    }

    /**
     * Moves the baby chicken left periodically.
     */
    moveBabyChicken() {
        setInterval(() => {
            if (this.isDead()) return;
            this.moveLeft();
            this.otherDirection = false;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) return;
            this.jump();
        }, 1000);
    }
}
