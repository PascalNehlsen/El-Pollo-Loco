class StatusBarBottle extends DrawableObject {
    imagesBottle = [
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ]

    bottleAmount = 0;

    constructor() {
        super();
        this.loadImages(this.imagesBottle);
        this.getBottles(0);
        this.x = 20;
        this.y = 60;
        this.width = 200;
        this.height = 60;
    }

    getBottles(bottleAmount) {
        this.bottleAmount = bottleAmount;
        let path = this.imagesBottle[this.countBottles()];
        this.img = this.imgCache[path];
    }

    countBottles() {
        if (this.bottleAmount >= 10) {
            return 5;
        } else if (this.bottleAmount >= 8) {
            return 4;
        } else if (this.bottleAmount >= 6) {
            return 3;
        } else if (this.bottleAmount >= 4) {
            return 2;
        } else if (this.bottleAmount >= 2) {
            return 1;
        } else {
            return 0;
        }
    }
}