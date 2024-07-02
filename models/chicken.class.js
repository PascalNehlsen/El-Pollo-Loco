class Chicken extends MovableObject {
  width = 50;
  height = 50;
  y = 380;
  imagesWalking = [
    './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
  ]

  constructor() {
    super().loadImage(
      './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'
    );
    this.loadImages(this.imagesWalking);
    this.speed = 0.15 + Math.random() * 1;
    this.x = 250 + Math.random() * 500;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.imagesWalking);
    }, 100);
    this.moveLeft();
  }
}
