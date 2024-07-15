/**
 * Represents a movable object that can be drawn and moved on the screen.
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {
  /** @type {number} */
  speed = 0.15;

  /** @type {number} */
  speedY = 0;

  /** @type {number} */
  acceleration = 3;

  /** @type {boolean} */
  otherDirection = false;

  /** @type {number} */
  energy = 100;

  /** @type {number} */
  lastHit = 0;

  /** @type {HTMLAudioElement} */
  game_sound = new Audio('./audio/game-music.mp3');

  /** @type {{left: number, top: number, right: number, bottom: number}} */
  offset = {
    left: 10,
    top: 10,
    right: 10,
    bottom: 10
  };

  /**
   * Applies gravity to the object, making it fall.
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /**
   * Makes the object jump by setting its vertical speed.
   */
  jump() {
    this.speedY = 30;
  }

  /**
   * Checks if the object is above the ground.
   * @returns {boolean} True if the object is above the ground, otherwise false.
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 140;
    }
  }

  /**
   * Checks if this object is colliding with another object.
   * @param {MovableObject} obj - The object to check collision against.
   * @returns {boolean} True if this object is colliding with the other object, otherwise false.
   */
  isColliding(obj) {
    return (
      this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
      this.y + this.height - this.offset.bottom > obj.y + obj.offset.top &&
      this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&
      this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom
    );
  }

  /**
   * Plays an animation by cycling through an array of image paths.
   * @param {string[]} images - An array of image paths for the animation.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

  /**
   * Moves the object to the right by increasing its x-coordinate.
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * Moves the object to the left by decreasing its x-coordinate.
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Decreases the object's energy when it gets hit.
   */
  hit() {
    this.energy -= 1;
    if (this.energy < 0) {
      this.energy = 0;
      this.game_sound.pause();
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Checks if the object is hurt by comparing the time since the last hit.
   * @returns {boolean} True if the object was hit within the last second, otherwise false.
   */
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    timePassed = timePassed / 1000;
    return timePassed < 1;
  }

  /**
   * Checks if the object is dead (energy is zero).
   * @returns {boolean} True if the object's energy is zero, otherwise false.
   */
  isDead() {
    return this.energy == 0;
  }
}
