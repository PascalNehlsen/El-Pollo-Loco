/**
 * Represents the game world where game elements interact and are rendered.
 */
class World {
  /**
   * @type {Character} - The main character of the game.
   */
  character = new Character();

  /**
   * @type {Level} - The current level of the game.
   */
  level = level1;

  /**
   * @type {HTMLCanvasElement} - The canvas element used for rendering.
   */
  canvas;

  /**
   * @type {CanvasRenderingContext2D} - The 2D rendering context of the canvas.
   */
  ctx;

  /**
   * @type {Keyboard} - The keyboard input handler.
   */
  keyboard;

  /**
   * @type {number} - The camera's x-coordinate position.
   */
  camera_x = 0;

  /**
   * @type {StatusBarHp} - The health status bar.
   */
  statusbarHp = new StatusBarHp();

  /**
   * @type {StatusBarBottle} - The bottle status bar.
   */
  statusbarBottle = new StatusBarBottle();

  /**
   * @type {StatusBarCoins} - The coins status bar.
   */
  statusbarCoins = new StatusBarCoins();

  /**
   * @type {StatusBarEndboss} - The end boss status bar.
   */
  statusBarEndboss = new StatusBarEndboss();

  /**
   * @type {ThrowableObject[]} - Array containing throwable objects (bottles).
   */
  throwableObjects = [];

  /**
   * @type {object[]} - Array containing collected coins.
   */
  collectedCoins = [];

  /**
   * @type {object[]} - Array containing collected bottles.
   */
  collectedBottles = [];

  /**
   * @type {HTMLAudioElement} - Audio played when collecting coins.
   */
  collect_coin_sound = new Audio('./audio/collect-coin.mp3');

  /**
   * @type {HTMLAudioElement} - Audio played when the character loses.
   */
  loose_sound = new Audio('./audio/loose-sound.mp3');

  /**
   * @type {boolean} - Indicates if the character has encountered the end boss for the first time.
   */
  firstContact = false;

  /**
   * Creates an instance of World.
   * @param {HTMLCanvasElement} canvas - The canvas element where the game is rendered.
   * @param {Keyboard} keyboard - The keyboard input handler.
   */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.character.x;
  }

  /**
   * Sets the world reference for the character.
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * Starts the game loops for handling game logic.
   */
  run() {
    setInterval(() => {
      this.checkThrowObjects();
    }, 100);

    setInterval(() => {
      this.checkCollisions();
    }, 25);

    setInterval(() => {
      this.checkIfCharacterIsDead();
    }, 50);
  }

  /**
   * Checks if the character's energy has dropped to zero, triggering game over.
   */
  checkIfCharacterIsDead() {
    if (this.character.energy <= 0) {
      document.getElementById('game-over').style.display = 'block';
      document.getElementById('menu-bar').style.display = 'flex';
      document.getElementById('restart-game').style.display = 'flex';
      document.getElementById('legal').style.display = '';
      this.clearAllIntervals();
    }
  }

  /**
   * Clears all setInterval functions, effectively stopping all game loops.
   */
  clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }

  /**
   * Determines the position for throwing a bottle based on the character's direction.
   * @returns {{x: number, y: number, direction: boolean}} - Position object for bottle throwing.
   */
  bottlePosition() {
    if (!this.character.otherDirection) {
      return {
        x: this.character.x + 70,
        y: this.character.y + 150,
        direction: this.character.otherDirection,
      };
    } else {
      return {
        x: this.character.x,
        y: this.character.y + 150,
        direction: this.character.otherDirection,
      };
    }
  }

  /**
   * Checks if the player triggers bottle throws and manages throwable objects accordingly.
   */
  checkThrowObjects() {
    if (this.keyboard.D && this.collectedBottles.length >= 1) {
      this.collectedBottles.splice(0, 1);
      let position = this.bottlePosition();
      let bottle = new ThrowableObject(position);
      this.throwableObjects.push(bottle);
      this.countBottles();
    }
  }

  /**
   * Handles picking up bottles by the character.
   */
  pickUpBottles() {
    this.level.bottles.forEach((bottle, i) => {
      if (this.character.isColliding(bottle)) {
        if (!soundMuted) {
          this.collect_coin_sound.play();
        }
        this.level.bottles.splice(i, 1);
        this.collectedBottles.push(bottle);
        this.countBottles();
      }
    });
  }

  /**
   * Checks collisions between game elements (character, enemies, objects).
   */
  checkCollisions() {
    this.checkCharacterCollisions();
    this.collectObjects();
    this.checkChickenKills();
  }

  /**
   * Collects coins and bottles when the character collides with them.
   */
  collectObjects() {
    this.pickUpCoins();
    this.pickUpBottles();
  }

  /**
   * Checks collisions between the character and enemies, managing health and interactions.
   */
  checkCharacterCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) && !this.character.isAboveGround()) {
        this.character.hit(1);
        this.statusbarHp.setPercentage(this.character.energy);
      }
    });
  }

  /**
   * Updates the end boss status bar with the provided energy value.
   * @param {number} energy - The energy level of the end boss.
   */
  updateEndbossStatusbar(energy) {
    this.statusBarEndboss.updateStatusbar(energy);
  }

  /**
   * Checks if the character kills any chickens by jumping on them.
   * @param {object} chicken - The chicken object to check against.
   */
  checkChickenKills() {
    this.level.enemies.forEach((chicken) => {
      this.checkKillByJump(chicken);
      this.checkKillByThrow(chicken);
    });
  }

  /**
   * Checks if the character kills a chicken by jumping on it.
   * @param {object} chicken - The chicken object to check against.
   */
  checkKillByJump(chicken) {
    if (this.character.isJumpingOn(chicken)) {
      this.character.killByJump(chicken);
    }
  }

  /**
   * Checks if any throwable object (bottle) kills the specified enemy object.
   * @param {object} obj - The enemy object to check against.
   */
  checkKillByThrow(obj) {
    this.throwableObjects.forEach((bottle) => {
      if (bottle.isColliding(obj)) {
        this.character.killByThrow(bottle, obj);
      }
    });
  }

  /**
   * Deletes a thrown bottle after a certain delay.
   * @param {ThrowableObject} bottle - The bottle object to delete.
   */
  deleteThrownBottle(bottle) {
    setTimeout(() => {
      let bottleIndex = this.throwableObjects.indexOf(bottle);
      this.throwableObjects.splice(bottleIndex, 1);
      this.character.hasBeenHit = false;
    }, 300);
  }

  /**
   * Deletes a dead enemy after a certain delay.
   * @param {object} enemy - The enemy object to delete.
   */
  deleteDeadEnemy(enemy) {
    setTimeout(() => {
      let enemyIndex = this.level.enemies.indexOf(enemy);
      if (enemyIndex !== -1 && (this.level.enemies[enemyIndex] instanceof Chicken || this.level.enemies[enemyIndex] instanceof BabyChicken)) {
        this.level.enemies.splice(enemyIndex, 1);
      }
    }, 300);
  }

  /**
   * Handles picking up coins by the character.
   */
  pickUpCoins() {
    this.level.coins.forEach((coin, i) => {
      if (this.character.isColliding(coin)) {
        if (!soundMuted) {
          this.collect_coin_sound.play();
        }
        this.level.coins.splice(i, 1);
        this.collectedCoins.push(coin);
        this.countCoins();
      }
    });
  }

  /**
   * Updates the bottle count in the bottle status bar.
   */
  countBottles() {
    this.statusbarBottle.bottleAmount = this.collectedBottles.length;
    this.statusbarBottle.getBottles(this.statusbarBottle.bottleAmount);
  }

  /**
   * Updates the coin count in the coin status bar.
   */
  countCoins() {
    this.statusbarCoins.coinsAmount = this.collectedCoins.length;
    this.statusbarCoins.getCoins(this.statusbarCoins.coinsAmount);
  }

  /**
   * Clears the canvas and redraws all game elements.
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusbarHp);
    this.addToMap(this.statusbarBottle);
    this.addToMap(this.statusbarCoins);
    if (this.character.x >= 3850) {
      this.firstContact = true;
    }
    if (this.firstContact) {
      this.addToMap(this.statusBarEndboss);
    }
    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.clouds);
    this.ctx.translate(-this.camera_x, 0);

    requestAnimationFrame(() => {
      this.draw();
    });
  }

  /**
   * Adds multiple game objects to the rendering map.
   * @param {object[]} obj - The array of objects to add to the map.
   */
  addObjectsToMap(obj) {
    obj.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Adds a single game object to the rendering map, handling flipping if necessary.
   * @param {object} mo - The game object to add to the map.
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipDirection(mo);
    }

    mo.draw(this.ctx);

    if (mo.otherDirection) {
      this.flipDirectionBack(mo);
    }
  }

  /**
   * Flips the canvas context horizontally for rendering a game object facing the other direction.
   * @param {object} mo - The game object to flip.
   */
  flipDirection(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * Restores the canvas context after flipping back to normal.
   * @param {object} mo - The game object to restore.
   */
  flipDirectionBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

}
