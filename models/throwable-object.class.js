class ThrowableObject extends MovableObject {
    throw_sound = new Audio('./audio/throw.mp3')

    imagesBottleRotation = [
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'

    ]

    constructor(position) {
        super().loadImage(
            './img/7_statusbars/3_icons/icon_salsa_bottle.png'
        );
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
        setInterval(() => {
            this.moveBottle();
            this.playAnimation(this.imagesBottleRotation)
        }, 25);
        this.throw_sound.play();
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
}

