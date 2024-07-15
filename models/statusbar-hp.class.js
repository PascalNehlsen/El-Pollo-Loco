/**
 * Represents a health bar status component in the game.
 */
class StatusBarHp extends DrawableObject {
    /**
     * Array of image paths representing different states of the health bar.
     * @type {string[]}
     */
    imagesHealthbar = [
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];

    /**
     * The current percentage of the health bar.
     * @type {number}
     */
    percentage = 100;

    /**
     * Constructs a new instance of StatusBarHp.
     */
    constructor() {
        super();
        this.loadImages(this.imagesHealthbar);
        this.setPercentage(100); // Initialize with 100% health
        this.x = 20;
        this.y = 0;
        this.width = 200;
        this.height = 60;
    }

    /**
     * Sets the percentage of the health bar and updates the displayed image.
     * @param {number} percentage - The new percentage value (0 to 100).
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.imagesHealthbar[this.resolveImageIndex()];
        this.img = this.imgCache[path];
    }

    /**
     * Determines the index of the image in imagesHealthbar based on the current percentage value.
     * @returns {number} - The index of the image to display.
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
