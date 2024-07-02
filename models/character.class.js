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
  walking_sound = new Audio('./audio/footsteps.mp3');

  constructor() {
    super().loadImage(
      './img/2_character_pepe/2_walk/W-21.png'
    );

    this.loadImages(this.imagesWalking);

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
        this.walking_sound.play();
        this.walking_sound.playbackRate = 3;
      }
    }, 1000 / 60)

    setInterval(() => {
      if (this.world.keyboard.LEFT && this.x > -200) {
        this.x -= this.speed;
        this.otherDirection = true;
        this.walking_sound.play();
      }
      this.world.camera_x = -this.x + 100;
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
