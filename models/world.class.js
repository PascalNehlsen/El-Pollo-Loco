class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusbarHp = new StatusBarHp();
  statusbarBottle = new StatusBarBottle();
  statusbarCoins = new StatusBarCoins();
  statusBarEndboss = new StatusBarEndboss();
  throwableObjects = [];
  collectedCoins = [];
  collectedBottles = [];
  collect_coin_sound = new Audio('./audio/collect-coin.mp3');

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.character.x;
  }

  setWorld() {
    this.character.world = this;
  }


  run() {
    setInterval(() => {
      this.checkThrowObjects();
    }, 100)

    setInterval(() => {
      this.checkCollisions();
    }, 25);

    setInterval(() => {
      this.checkIfCharacterIsDead();
    }, 50);
  }

  checkIfCharacterIsDead() {
    if (this.character.energy <= 0) {
      document.getElementById('game-over').style.display = 'block';
      this.clearAllIntervals();
    }
  }

  clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }

  bottlePosition() {
    if (!this.character.otherDirection) {
      return {
        x: this.character.x + 70,
        y: this.character.y + 150,
        direction: this.character.otherDirection
      };
    } else {
      return {
        x: this.character.x,
        y: this.character.y + 150,
        direction: this.character.otherDirection
      };
    }
  }

  checkThrowObjects() {
    if (this.keyboard.D && this.collectedBottles.length >= 1) {
      this.collectedBottles.splice(0, 1);
      let position = this.bottlePosition();
      let bottle = new ThrowableObject(position);
      this.throwableObjects.push(bottle);
      this.countBottles();
    }
  }

  pickUpBottles() {
    this.level.bottles.forEach((bottle, i) => {
      if (this.character.isColliding(bottle)) {
        this.collect_coin_sound.play();
        this.level.bottles.splice(i, 1);
        this.collectedBottles.push(bottle);
        this.countBottles();
      }
    });
  }

  checkCollisions() {
    this.checkCharacterCollisions();
    this.collectObjects();
    this.checkChickenKills();
  }

  collectObjects() {
    this.pickUpCoins();
    this.pickUpBottles();
  }

  checkCharacterCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) && !this.character.isAboveGround()) {
        this.character.hit()
        this.statusbarHp.setPercentage(this.character.energy);
      }
    })
  }

  updateEndbossStatusbar(energy) {
    this.statusBarEndboss.statusbarEndboss(energy);
  }

  checkChickenKills() {
    this.level.enemies.forEach(chicken => {
      // if (chicken instanceof Endboss) return;
      this.checkKillByJump(chicken);
      this.checkKillByThrow(chicken);
    });
  }

  checkKillByJump(chicken) {
    if (this.character.isJumpingOn(chicken)) {
      this.character.killByJump(chicken);
    }
  }

  checkKillByThrow(obj) {
    this.throwableObjects.forEach(bottle => {
      if (bottle.isColliding(obj)) {
        this.character.killByThrow(bottle, obj);
      }
    });
  }

  deleteThrownBottle(bottle) {
    setTimeout(() => {
      let bottleIndex = this.throwableObjects.indexOf(bottle);
      this.throwableObjects.splice(bottleIndex, 1);
      this.character.hasBeenHit = false;
    }, 300);
  }

  deleteDeadEnemy(enemy) {
    setTimeout(() => {
      let enemyIndex = this.level.enemies.indexOf(enemy);
      if (enemyIndex !== -1 && this.level.enemies[enemyIndex] instanceof Chicken || this.level.enemies[enemyIndex] instanceof BabyChicken) {
        this.level.enemies.splice(enemyIndex, 1);
      }
    }, 300);
  }

  pickUpCoins() {
    this.level.coins.forEach((coin, i) => {
      if (this.character.isColliding(coin)) {
        this.collect_coin_sound.play();
        this.level.coins.splice(i, 1);
        this.collectedCoins.push(coin);
        this.countCoins();
      }
    });
  }

  countBottles() {
    this.statusbarBottle.bottleAmount = this.collectedBottles.length;
    this.statusbarBottle.getBottles(this.statusbarBottle.bottleAmount);
  }

  countCoins() {
    this.statusbarCoins.coinsAmount = this.collectedCoins.length;
    this.statusbarCoins.getCoins(this.statusbarCoins.coinsAmount);
  }

  draw() {
    this.ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusbarHp);
    this.addToMap(this.statusbarBottle);
    this.addToMap(this.statusbarCoins);
    this.addToMap(this.statusBarEndboss);
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

  addObjectsToMap(obj) {
    obj.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipDirection(mo);
    }

    mo.draw(this.ctx);
    // mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipDirectionBack(mo);
    }
  }

  flipDirection(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipDirectionBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

}
