/**
 * Represents a status bar for bottles in the game.
 */
class StatusBarBottle extends DrawableObject {
    /**
     * Array of image paths representing different states of the bottle status bar.
     * @type {string[]}
     */
    imagesBottle = [
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];

    /**
     * The amount of bottles currently represented by the status bar.
     * @type {number}
     */
    bottleAmount = 0;

    /**
     * Constructs a new instance of StatusBarBottle.
     */
    constructor() {
        super();
        this.loadImages(this.imagesBottle);
        this.getBottles(0); // Initialize with 0 bottles
        this.x = 20;
        this.y = 60;
        this.width = 200;
        this.height = 60;
    }

    /**
     * Sets the number of bottles and updates the displayed image accordingly.
     * @param {number} bottleAmount - The number of bottles to set.
     */
    getBottles(bottleAmount) {
        this.bottleAmount = bottleAmount;
        let path = this.imagesBottle[this.countBottles()];
        this.img = this.imgCache[path];
    }

    /**
     * Determines the index of the image in imagesBottle based on the current bottle amount.
     * @returns {number} - The index of the image to display.
     */
    countBottles() {
        if (this.bottleAmount == 10) {
            this.playStatusbarFullSound(); // Play sound if status bar is full
            return 5;
        } else if (this.bottleAmount >= 10) {
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
