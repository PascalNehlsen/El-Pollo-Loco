/**
 * Represents a status bar for coins in the game.
 */
class StatusBarCoins extends DrawableObject {
    /**
     * Array of image paths representing different states of the coin status bar.
     * @type {string[]}
     */
    imagesCoins = [
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    /**
     * The amount of coins currently represented by the status bar.
     * @type {number}
     */
    coinsAmount = 0;

    /**
     * Constructs a new instance of StatusBarCoins.
     */
    constructor() {
        super();
        this.loadImages(this.imagesCoins);
        this.getCoins(0); // Initialize with 0 coins
        this.x = 20;
        this.y = 120;
        this.width = 200;
        this.height = 60;
    }

    /**
     * Sets the number of coins and updates the displayed image accordingly.
     * @param {number} coinsAmount - The number of coins to set.
     */
    getCoins(coinsAmount) {
        this.coinsAmount = coinsAmount;
        let path = this.imagesCoins[this.countCoins()];
        this.img = this.imgCache[path];
    }

    /**
     * Determines the index of the image in imagesCoins based on the current coins amount.
     * @returns {number} - The index of the image to display.
     */
    countCoins() {
        if (this.coinsAmount == 10) {
            this.playStatusbarFullSound(); // Play sound if status bar is full
            return 5;
        } else if (this.coinsAmount >= 10) {
            return 5;
        } else if (this.coinsAmount >= 8) {
            return 4;
        } else if (this.coinsAmount >= 6) {
            return 3;
        } else if (this.coinsAmount >= 4) {
            return 2;
        } else if (this.coinsAmount >= 2) {
            return 1;
        } else {
            return 0;
        }
    }
}
