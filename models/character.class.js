class Character extends MovableObject {
  height = 300;
  width = 150;
  y = 140;
  x = 50;
  imagesWalking = [
    './img/2_character_pepe/2_walk/W-21.png',
    './img/2_character_pepe/2_walk/W-22.png',
    './img/2_character_pepe/2_walk/W-23.png',
    './img/2_character_pepe/2_walk/W-24.png',
    './img/2_character_pepe/2_walk/W-25.png',
    './img/2_character_pepe/2_walk/W-26.png',
  ]
  world;
  speed = 10;

  constructor() {
    super().loadImage(
      './img/2_character_pepe/2_walk/W-21.png'
    );

    this.loadImages(this.imagesWalking);

    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        this.x += this.speed;
        this.otherDirection = false;
      }
    }, 1000 / 60)

    setInterval(() => {
      if (this.world.keyboard.LEFT) {
        this.x -= this.speed;
        this.otherDirection = true;
      }
    }, 1000 / 60)

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        let i = this.currentImage % this.imagesWalking.length;
        let path = this.imagesWalking[i];
        this.img = this.imgCache[path];
        this.currentImage++;
      }
    }, 25);
  }

  jump() { }
}
