class DrawableObject {
    img;
    imgCache = {};
    currentImage = 0;
    x = 120;
    y = 250;
    height = 150;
    width = 100;

    constructor() {
        this.statusbar_full_sound = new Audio('./audio/bar-full.mp3');
    }

    playStatusbarFullSound() {
        this.statusbar_full_sound.play();
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let image = new Image();
            image.src = path,
                this.imgCache[path] = image;
        });
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof Coin || this instanceof Bottle) {
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = "green";
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.left, this.height - this.offset.bottom - this.offset.top);
            ctx.stroke();
        }
    }
}