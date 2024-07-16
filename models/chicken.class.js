/**
 * Represents a chicken object in the game, extending the MovableObject class.
 * @extends MovableObject
 */
class Chicken extends MovableObject {
  /**
   * Width of the chicken object.
   * @type {number}
   */
  width = 80;

  /**
   * Height of the chicken object.
   * @type {number}
   */
  height = 80;

  /**
   * Initial vertical position of the chicken object.
   * @type {number}
   */
  y = 350;

  /**
   * Array of paths to images used when the chicken is walking.
   * @type {string[]}
   */
  imagesWalking = [
    './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
  ];

  /**
   * Array of paths to images used when the chicken is dead.
   * @type {string[]}
   */
  imagesDead = [
    './img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
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
   * Constructs a new instance of Chicken.
   */
  constructor() {
    super().loadImage(
      './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'
    );
    this.loadImages(this.imagesWalking);
    this.loadImages(this.imagesDead);

    this.speed = 0.15 + Math.random() * 1;
    this.x = 600 + Math.random() * 4100;
    this.animate();
  }

  /**
   * Initiates animations for the chicken.
   */
  animate() {
    this.moveChicken();
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
   * Moves the chicken left periodically.
   */
  moveChicken() {
    setInterval(() => {
      if (this.isDead()) return;
      this.moveLeft();
      this.otherDirection = false;
    }, 1000 / 60);
  }
}
