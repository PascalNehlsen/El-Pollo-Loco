/**
 * Represents a background object in the game, extending the MovableObject class.
 * @extends MovableObject
 */
class BackgroundObject extends MovableObject {
  /**
   * Height of the background object.
   * @type {number}
   */
  height = 480;

  /**
   * Width of the background object.
   * @type {number}
   */
  width = 721;

  /**
   * Constructs a new instance of BackgroundObject.
   * @param {string} imagePath - Path to the image of the background object.
   * @param {number} x - Initial x-coordinate position of the background object.
   * @param {number} y - Initial y-coordinate position of the background object.
   */
  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.y = y;
    this.x = x;
  }
}
