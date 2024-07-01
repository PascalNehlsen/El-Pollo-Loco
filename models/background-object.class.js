class BackgroundObject extends MovableObject {
  height = 480;
  width = 721;
  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.y = y;
    this.x = x;
  }
}
