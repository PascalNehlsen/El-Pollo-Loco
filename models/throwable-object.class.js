class ThrowableObject extends MovableObject {
    throw_sound = new Audio('./audio/throw.mp3')

    imagesBottleRotation = [
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]

    imagesExplosion = [
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ]

    constructor(position) {
        super().loadImage(
            './img/7_statusbars/3_icons/icon_salsa_bottle.png'
        );
        this.world = world;
        this.x = position.x;
        this.y = position.y;
        this.height = 80;
        this.width = 80;
        this.otherDirection = position.direction;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        this.loadImages(this.imagesBottleRotation);
        this.loadImages(this.imagesExplosion);
        setInterval(() => {
            this.moveBottle();
            this.playAnimation(this.imagesBottleRotation)
        }, 25);
        this.throw_sound.play();
        this.checkHit();
    }

    checkHit() {
        setInterval(() => {
            this.world.level.enemies.forEach(enemy => this.bottleExplosion(enemy));
        }, 200);
    }

    moveBottle() {
        if (this.y >= 370) {
            // this.broken = true;
        } else if (this.otherDirection) {
            this.x -= 10;
        } else {
            this.x += 10;
        }
    }

    bottleExplosion(enemy) {
        if (this.isColliding(enemy)) {
            this.playAnimation(this.imagesExplosion);
            // if (this.hasBeenThrown) return;

            // this.playSplashSound();
            // this.stopGravity();
            // clearInterval(this.flyInterval);
            // this.hasBeenThrown = true;
        }
    }
}

