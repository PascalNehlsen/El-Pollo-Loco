/**
 * Represents a cloud object in the game, extending the MovableObject class.
 * @extends MovableObject
 */
class Cloud extends MovableObject {
  /**
   * Initial vertical position of the cloud object.
   * @type {number}
   */
  y = 20;

  /**
   * Height of the cloud object.
   * @type {number}
   */
  height = 250;

  /**
   * Width of the cloud object.
   * @type {number}
   */
  width = 500;

  /**
   * Constructs a new instance of Cloud.
   */
  constructor() {
    super().loadImage(
      './img/5_background/layers/4_clouds/1.png'
    );
    this.x = Math.random() * 5000;
    this.animateCloud();
  }

  /**
   * Initiates animation for the cloud, moving it to the left periodically.
   */
  animateCloud() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
