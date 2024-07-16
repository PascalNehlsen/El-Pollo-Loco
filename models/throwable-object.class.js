/**
 * Class representing a throwable object.
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {

    /**
     * @type {string[]}
     * @private
     */
    imagesBottleRotation = [
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    /**
     * @type {string[]}
     * @private
     */
    imagesExplosion = [
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    /**
     * Creates an instance of ThrowableObject.
     * @param {Object} position - The initial position and direction of the object.
     * @param {number} position.x - The initial x-coordinate.
     * @param {number} position.y - The initial y-coordinate.
     * @param {boolean} position.direction - The direction of the object.
     */
    constructor(position) {
        super().loadImage('./img/7_statusbars/3_icons/icon_salsa_bottle.png');
        this.world = world;
        this.x = position.x;
        this.y = position.y;
        this.height = 80;
        this.width = 80;
        this.otherDirection = position.direction;
        this.throw();
    }

    /**
     * Initiates the throwing of the object.
     * @private
     */
    throw() {
        this.speedY = 30;
        this.applyGravity();
        this.loadImages(this.imagesBottleRotation);
        this.loadImages(this.imagesExplosion);
        setInterval(() => {
            this.moveBottle();
        }, 25);
        setInterval(() => {
            this.playAnimation(this.imagesBottleRotation);
        }, 50);
        if (!soundMuted) {
            throw_sound.play();
        }
        this.checkHit();
    }

    /**
     * Checks for collisions with enemies.
     * @private
     */
    checkHit() {
        setInterval(() => {
            this.world.level.enemies.forEach(enemy => this.bottleExplosion(enemy));
        }, 10);
    }

    /**
     * Moves the bottle based on its direction.
     * @private
     */
    moveBottle() {
        if (this.y >= 370) {
            // Handle the case when the bottle hits the ground
        } else if (this.otherDirection) {
            this.x -= 10;
        } else {
            this.x += 10;
        }
    }

    /**
     * Handles the explosion of the bottle upon collision with an enemy.
     * @param {Object} enemy - The enemy object.
     * @private
     */
    bottleExplosion(enemy) {
        if (this.isColliding(enemy)) {
            this.playAnimation(this.imagesExplosion);
            if (!soundMuted) {
                break_sound.play();
            }
        }
    }
}
