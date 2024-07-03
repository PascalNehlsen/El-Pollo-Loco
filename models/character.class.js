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
  ];
  imagesJumping = [
    './img/2_character_pepe/3_jump/J-31.png',
    './img/2_character_pepe/3_jump/J-32.png',
    './img/2_character_pepe/3_jump/J-33.png',
    './img/2_character_pepe/3_jump/J-34.png',
    './img/2_character_pepe/3_jump/J-35.png',
    './img/2_character_pepe/3_jump/J-36.png',
    './img/2_character_pepe/3_jump/J-37.png',
    './img/2_character_pepe/3_jump/J-38.png',
    './img/2_character_pepe/3_jump/J-39.png',
  ];
  world;
  speed = 10;
  walking_sound = new Audio('./audio/footsteps.mp3');

  constructor() {
    super().loadImage(
      './img/2_character_pepe/2_walk/W-21.png'
    );
    this.applyGravity();
    this.loadImages(this.imagesWalking);
    this.loadImages(this.imagesJumping);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.walking_sound.play();
        this.walking_sound.playbackRate = 3;
      }

      if (this.world.keyboard.LEFT && this.x > -200) {
        this.moveLeft()
        this.otherDirection = true;
        this.walking_sound.play();
        this.walking_sound.playbackRate = 3;
      }

      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump()
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60)

    setInterval(() => {
      if (this.isAboveGround()) {
        this.playAnimation(this.imagesJumping);
      }

      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(this.imagesWalking);
      }
    }, 40);
  }
}
