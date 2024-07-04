class StatusBarCoins extends DrawableObject {
    imagesCoins = [
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    coinsAmount = 0;

    constructor() {
        super();
        this.loadImages(this.imagesCoins);
        this.getCoins(0);
        this.x = 20;
        this.y = 120;
        this.width = 200;
        this.height = 60;
    }

    getCoins(coinsAmount) {
        this.coinsAmount = coinsAmount;
        let path = this.imagesCoins[this.countCoins()];
        this.img = this.imgCache[path];
    }

    countCoins() {
        if (this.coinsAmount == 100) {
            return 5;
        } else if (this.coinsAmount > 80) {
            return 4;
        } else if (this.coinsAmount > 60) {
            return 3;
        } else if (this.coinsAmount > 40) {
            return 2;
        } else if (this.coinsAmount > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}