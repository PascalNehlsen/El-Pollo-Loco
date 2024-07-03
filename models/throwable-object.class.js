class ThrowableObject extends MovableObject {
    constructor(x, y, otherDirection) {
        super().loadImage(
            './img/7_statusbars/3_icons/icon_salsa_bottle.png'
        );
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.otherDirection = otherDirection;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.moveBottle();
        }, 25);
    }

    moveBottle() {
        if (this.y >= 370) {
            this.speedY = 0;
            this.x += 10;
            this.y += 10;
            this.broken = true;
        } else if (this.otherDirection) {
            this.x -= 10;
        } else {
            this.x += 10;
        }
    }
}

