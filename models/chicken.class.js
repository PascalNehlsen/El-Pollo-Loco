class Chicken extends MovableObject {
  width = 50;
  height = 50;
  y = 380;
  imagesWalking = [
    './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
  ]

  imagesDead = [
    './img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
  ]

  offset = {
    left: 0,
    top: 2,
    right: 0,
    bottom: 5
  };

  constructor() {
    super().loadImage(
      './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'
    );
    this.loadImages(this.imagesWalking);
    this.speed = 0.15 + Math.random() * 1;
    this.x = 300 + Math.random() * 500;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
      this.otherDirection = false;
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.imagesWalking);
    }, 100);
  }
}
