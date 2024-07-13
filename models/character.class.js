class Character extends MovableObject {
  height = 300;
  width = 150;
  y = 140;
  x = 50;
  hasBeenHit = false;

  imagesWalking = [
    './img/2_character_pepe/2_walk/W-21.png',
    './img/2_character_pepe/2_walk/W-22.png',
    './img/2_character_pepe/2_walk/W-23.png',
    './img/2_character_pepe/2_walk/W-24.png',
    './img/2_character_pepe/2_walk/W-25.png',
    './img/2_character_pepe/2_walk/W-26.png'
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
    './img/2_character_pepe/3_jump/J-39.png'
  ];

  imagesDead = [
    './img/2_character_pepe/5_dead/D-51.png',
    './img/2_character_pepe/5_dead/D-52.png',
    './img/2_character_pepe/5_dead/D-53.png',
    './img/2_character_pepe/5_dead/D-54.png',
    './img/2_character_pepe/5_dead/D-55.png',
    './img/2_character_pepe/5_dead/D-56.png',
    './img/2_character_pepe/5_dead/D-57.png'
  ];

  imagesHurt = [
    './img/2_character_pepe/4_hurt/H-41.png',
    './img/2_character_pepe/4_hurt/H-42.png',
    './img/2_character_pepe/4_hurt/H-43.png'
  ]

  imagesIdle = [
    './img/2_character_pepe/1_idle/idle/I-1.png',
    './img/2_character_pepe/1_idle/idle/I-2.png',
    './img/2_character_pepe/1_idle/idle/I-3.png',
    './img/2_character_pepe/1_idle/idle/I-4.png',
    './img/2_character_pepe/1_idle/idle/I-5.png',
    './img/2_character_pepe/1_idle/idle/I-6.png',
    './img/2_character_pepe/1_idle/idle/I-7.png',
    './img/2_character_pepe/1_idle/idle/I-8.png',
    './img/2_character_pepe/1_idle/idle/I-9.png',
    './img/2_character_pepe/1_idle/idle/I-10.png'
  ]

  imagesLongIdle = [
    './img/2_character_pepe/1_idle/long_idle/I-11.png',
    './img/2_character_pepe/1_idle/long_idle/I-12.png',
    './img/2_character_pepe/1_idle/long_idle/I-13.png',
    './img/2_character_pepe/1_idle/long_idle/I-14.png',
    './img/2_character_pepe/1_idle/long_idle/I-15.png',
    './img/2_character_pepe/1_idle/long_idle/I-16.png',
    './img/2_character_pepe/1_idle/long_idle/I-17.png',
    './img/2_character_pepe/1_idle/long_idle/I-18.png',
    './img/2_character_pepe/1_idle/long_idle/I-19.png',
    './img/2_character_pepe/1_idle/long_idle/I-20.png'
  ]

  offset = {
    left: 50,
    top: 110,
    right: 50,
    bottom: 15
  };

  world;
  speed = 5;
  walking_sound = new Audio('./audio/footsteps.mp3');
  jump_sound = new Audio('./audio/jump.mp3')
  snore_sound = new Audio('./audio/snore.mp3')
  hurt_sound = new Audio('./audio/hurt.mp3')
  smash_enemy = new Audio('./audio/smash-baby-chicken.mp3')
  gameStarted = false;

  constructor() {
    super().loadImage(
      './img/2_character_pepe/1_idle/long_idle/I-11.png'
    );
    this.applyGravity();
    this.loadImages(this.imagesIdle);
    this.loadImages(this.imagesLongIdle);
    this.loadImages(this.imagesWalking);
    this.loadImages(this.imagesJumping);
    this.loadImages(this.imagesDead);
    this.loadImages(this.imagesHurt);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (!this.isAboveGround()) {
        this.speedY = 0;
        this.y = 140;
      }

      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.gameStarted = true;
        this.otherDirection = false;
        if (!this.isAboveGround()) {
          if (!soundMuted) {
            this.walking_sound.play();
            this.walking_sound.playbackRate = 3;
          }
        }
      }

      if (this.world.keyboard.LEFT && this.x > -200) {
        this.moveLeft()
        this.gameStarted = true;
        this.otherDirection = true;
        if (!this.isAboveGround()) {
          if (!soundMuted) {
            this.walking_sound.play();
            this.walking_sound.playbackRate = 3;
          }
        }
      }

      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump()
        if (!soundMuted) {
          this.jump_sound.play();
        }
        this.snore_sound.pause();
        this.gameStarted = true;
        this.jump_sound.playbackRate = 1.5;
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60)

    setInterval(() => {
      if (this.isDead()) {
        this.game_sound.pause();
        this.playAnimation(this.imagesDead);
        this.snore_sound.pause();
      } else if (this.isHurt() && !this.isAboveGround()) {
        if (!soundMuted) {
          this.hurt_sound.play()
        }
        this.playAnimation(this.imagesHurt);
        this.gameStarted = true;
        this.snore_sound.pause();
      } else if (this.world.keyboard.RIGHT && !this.isAboveGround() || this.world.keyboard.LEFT && !this.isAboveGround()) {
        this.playAnimation(this.imagesWalking);
        this.gameStarted = true;
        this.snore_sound.pause();
        if (!(soundMuted && !onlyMusic) || (soundMuted && onlyMusic)) {
          this.game_sound.volume = 0.02;
          this.game_sound.play();
        }
      }
      let bigChicken = this.world.level.enemies[this.world.level.enemies.length - 1];
      if (bigChicken.energy <= 0) {
        this.game_sound.pause();
      }
    }, 60);
    setInterval(() => {
      if (this.x < 100 && this.energy == 100 && !this.gameStarted) {
        this.playAnimation(this.imagesLongIdle);
        if (!soundMuted) {
          this.snore_sound.play();
        }
      }
      if (this.isAboveGround()) {
        this.playAnimation(this.imagesJumping);
        this.gameStarted = true;
      }
    }, 150);
  }

  isJumpingOn(obj) {
    return this.isColliding(obj) && this.isAboveGround();
  }

  killByThrow(bottle, enemy) {
    let bigChicken = this.world.level.enemies[this.world.level.enemies.length - 1];
    if (enemy == bigChicken) {
      if (!this.hasBeenHit) {
        enemy.hit();
        console.log(enemy.energy);
        this.hasBeenHit = true;
        this.world.updateEndbossStatusbar(enemy.energy);
      }
    } else {
      enemy.energy = 0;
    }
    this.world.deleteThrownBottle(bottle);
    this.world.deleteDeadEnemy(enemy);
  }

  killByJump(enemy) {
    let bigChicken = this.world.level.enemies[this.world.level.enemies.length - 1];
    if (enemy != bigChicken)
      enemy.energy = 0;
    if (!soundMuted) {
      this.smash_enemy.play();
    }
    this.world.deleteDeadEnemy(enemy);
    this.jump();
  }
}
