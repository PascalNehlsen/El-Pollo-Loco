/**
 * Represents a status bar for the end boss in the game.
 */
class StatusBarEndboss extends DrawableObject {
    /**
     * Array of image paths representing different states of the end boss status bar.
     * @type {string[]}
     */
    imagesEndboss = [
        './img/7_statusbars/2_statusbar_endboss/blue/blue0.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue20.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue60.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue80.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue100.png',
    ];

    /**
     * The percentage value to display on the status bar.
     * @type {number}
     */
    percentage = 100;

    /**
     * Constructs a new instance of StatusBarEndboss.
     */
    constructor() {
        super();
        this.loadImages(this.imagesEndboss);
        this.updateStatusbar(100); // Initialize with 100% percentage
        this.x = 500;
        this.y = 50;
        this.width = 200;
        this.height = 60;
    }

    /**
     * Updates the status bar with a new percentage value.
     * @param {number} percentage - The new percentage value (0 to 100).
     */
    updateStatusbar(percentage) {
        this.percentage = percentage;
        let path = this.imagesEndboss[this.resolveImageIndex()];
        this.img = this.imgCache[path];
    }

    /**
     * Determines the index of the image in imagesEndboss based on the current percentage value.
     * @returns {number} - The index of the image to display.
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 50) {
            return 3;
        } else if (this.percentage >= 30) {
            return 2;
        } else if (this.percentage >= 10) {
            return 1;
        } else {
            return 0;
        }
    }
}
