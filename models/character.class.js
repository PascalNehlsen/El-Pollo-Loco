/**
 * Class representing the main character.
 * @extends MovableObject
 */
class Character extends MovableObject {
  /** @type {number} */
  height = 300;

  /** @type {number} */
  width = 150;

  /** @type {number} */
  y = 140;

  /** @type {number} */
  x = 50;

  /** @type {boolean} */
  hasBeenHit = false;

  /** @type {string[]} */
  imagesWalking = [
    './img/2_character_pepe/2_walk/W-21.png',
    './img/2_character_pepe/2_walk/W-22.png',
    './img/2_character_pepe/2_walk/W-23.png',
    './img/2_character_pepe/2_walk/W-24.png',
    './img/2_character_pepe/2_walk/W-25.png',
    './img/2_character_pepe/2_walk/W-26.png'
  ];

  /** @type {string[]} */
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

  /** @type {string[]} */
  imagesDead = [
    './img/2_character_pepe/5_dead/D-51.png',
    './img/2_character_pepe/5_dead/D-52.png',
    './img/2_character_pepe/5_dead/D-53.png',
    './img/2_character_pepe/5_dead/D-54.png',
    './img/2_character_pepe/5_dead/D-55.png',
    './img/2_character_pepe/5_dead/D-56.png',
    './img/2_character_pepe/5_dead/D-57.png'
  ];

  /** @type {string[]} */
  imagesHurt = [
    './img/2_character_pepe/4_hurt/H-41.png',
    './img/2_character_pepe/4_hurt/H-42.png',
    './img/2_character_pepe/4_hurt/H-43.png'
  ];

  /** @type {string[]} */
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
  ];

  /** @type {string[]} */
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
  ];

  /** @type {Object} */
  offset = {
    left: 50,
    top: 110,
    right: 50,
    bottom: 15
  };

  /** @type {Object} */
  world;

  /** @type {number} */
  speed = 5;

  /** @type {boolean} */
  gameStarted = false;

  sleepTimer = null;
  /**
   * Creates an instance of Character.
   */
  constructor() {
    super().loadImage('./img/2_character_pepe/1_idle/long_idle/I-11.png');
    this.applyGravity();
    this.loadImages(this.imagesIdle);
    this.loadImages(this.imagesLongIdle);
    this.loadImages(this.imagesWalking);
    this.loadImages(this.imagesJumping);
    this.loadImages(this.imagesDead);
    this.loadImages(this.imagesHurt);
    this.animate();
  }

  /**
   * Animates the character's movements and actions.
   * @private
   */
  animate() {
    setInterval(() => {
      if (!this.isAboveGround()) {
        this.speedY = 0;
        this.y = 140;
      }
      walking_sound.pause();
      this.changeMovements();
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      this.changeAnimationsOnWalk();
    }, 60);

    setInterval(() => {
      this.playIdleAnimation();
    }, 150);
  }

  /**
   * Changes the character's movements based on keyboard input.
   * @private
   */
  changeMovements() {
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
      this.getRightWalkSound();
    }
    if (this.world.keyboard.LEFT && this.x > -200) {
      this.getWalkSoundOnStart();
    }
    if (this.world.keyboard.SPACE && !this.isAboveGround()) {
      this.jumpSound();
    }
  }

  /**
   * Plays the walking sound when moving right.
   * @private
   */
  getRightWalkSound() {
    this.moveRight();
    this.gameStarted = true;
    this.otherDirection = false;
    if (!this.isAboveGround()) {
      if (!soundMuted) {
        walking_sound.play();
        walking_sound.playbackRate = 3;
      }
    }
  }

  /**
   * Plays the walking sound when moving left.
   * @private
   */
  getWalkSoundOnStart() {
    this.moveLeft();
    this.gameStarted = true;
    this.otherDirection = true;
    if (!this.isAboveGround()) {
      if (!soundMuted) {
        walking_sound.play();
        walking_sound.playbackRate = 3;
      }
    }
  }

  /**
   * Plays the jump sound.
   * @private
   */
  jumpSound() {
    this.jump();
    if (!soundMuted) {
      jump_sound.play();
    }
    snore_sound.pause();
    this.gameStarted = true;
    jump_sound.playbackRate = 1.5;
  }

  /**
   * Changes the character's animations based on movement.
   * @private
   */
  changeAnimationsOnWalk() {
    if (this.isDead()) {
      game_sound.pause();
      this.playAnimation(this.imagesDead);
      snore_sound.pause();
    } else if (this.isHurt() && !this.isAboveGround()) {
      this.muteSound();
    } else if (this.world.keyboard.RIGHT && !this.isAboveGround() || this.world.keyboard.LEFT && !this.isAboveGround()) {
      this.playStartAnimation();
    }
    let bigChicken = this.world.level.enemies[this.world.level.enemies.length - 1];
    if (bigChicken.energy <= 0) {
      game_sound.pause();
    }
  }

  /**
   * Mutes sound and plays the hurt animation.
   * @private
   */
  muteSound() {
    if (!soundMuted) {
      hurt_sound.play();
    }
    this.playAnimation(this.imagesHurt);
    this.gameStarted = true;
    snore_sound.pause();
  }

  /**
   * Plays the walking animation.
   * @private
   */
  playStartAnimation() {
    this.playAnimation(this.imagesWalking);
    this.gameStarted = true;
    snore_sound.pause();
    if (!(soundMuted && !onlyMusic) || (soundMuted && onlyMusic)) {
      game_sound.volume = 0.02;
      game_sound.play();
    }
  }
  sleepTimer = null;
  playLongIdleAnimation = false;
  /**
   * Plays the idle animation.
   * @private
   */
  playIdleAnimation() {
    if (this.x < 100 && this.energy == 100 && !this.gameStarted) {
      this.playAnimation(this.imagesLongIdle);
      if (!soundMuted) {
        snore_sound.play();
      }
    }
    if (this.isAboveGround()) {
      this.playAnimation(this.imagesJumping);
      this.gameStarted = true;
    }
    if (this.gameStarted && !keyboard.RIGHT && !keyboard.LEFT && !keyboard.UP && !keyboard.DOWN && !keyboard.SPACE && !keyboard.D) {
      this.playAnimation(this.imagesIdle);
    }
  }

  /**
   * Checks if the character is jumping on an object.
   * @param {Object} obj - The object to check collision with.
   * @returns {boolean} True if the character is jumping on the object, false otherwise.
   */
  isJumpingOn(obj) {
    return this.isColliding(obj) && this.isAboveGround() && this.speedY < 20;
  }

  /**
   * Handles the kill logic when the character throws a bottle at an enemy.
   * @param {Object} bottle - The thrown bottle.
   * @param {Object} enemy - The enemy to check collision with.
   */
  killByThrow(bottle, enemy) {
    let bigChicken = this.world.level.enemies[this.world.level.enemies.length - 1];
    if (enemy == bigChicken) {
      if (!this.hasBeenHit) {
        enemy.hit(10);
        this.hasBeenHit = true;
        this.world.updateEndbossStatusbar(enemy.energy);
      }
    } else {
      enemy.energy = 0;
    }
    this.world.deleteThrownBottle(bottle);
    this.world.deleteDeadEnemy(enemy);
  }

  /**
   * Handles the kill logic when the character jumps on an enemy.
   * @param {Object} enemy - The enemy to check collision with.
   */
  killByJump(enemy) {
    let bigChicken = this.world.level.enemies[this.world.level.enemies.length - 1];
    if (enemy != bigChicken)
      enemy.energy = 0;
    if (!soundMuted) {
      smash_enemy.play();
    }
    this.world.deleteDeadEnemy(enemy);
    this.jump();
  }
}
