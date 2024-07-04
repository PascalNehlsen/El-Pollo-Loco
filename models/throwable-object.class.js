class ThrowableObject extends MovableObject {
    throw_sound = new Audio('./audio/throw.mp3')

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
        setInterval(() => {
            this.moveBottle();
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

