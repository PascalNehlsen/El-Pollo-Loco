/**
 * Represents a drawable object with an image.
 */
class DrawableObject {
    /** @type {HTMLImageElement} */
    img;

    /** @type {Object.<string, HTMLImageElement>} */
    imgCache = {};

    /** @type {number} */
    currentImage = 0;

    /** @type {number} */
    x = 120;

    /** @type {number} */
    y = 250;

    /** @type {number} */
    height = 150;

    /** @type {number} */
    width = 100;

    /**
     * Creates a new DrawableObject.
     */
    constructor() {
        /** @type {HTMLAudioElement} */
        this.statusbar_full_sound = new Audio('./audio/bar-full.mp3');
    }

    /**
     * Plays the status bar full sound if sound is not muted.
     * @param {boolean} soundMuted - A boolean indicating if the sound is muted.
     */
    playStatusbarFullSound(soundMuted) {
        if (!soundMuted) {
            this.statusbar_full_sound.play();
        }
    }

    /**
     * Loads an image from the given path.
     * @param {string} path - The path to the image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draws the image on the provided canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Loads multiple images from the given array of paths.
     * @param {string[]} arr - An array of image paths. 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let image = new Image();
            image.src = path;
            this.imgCache[path] = image;
        });
    }
}
