class MovableObject {
  x = 120;
  y = 250;
  height = 150;
  width = 100;
  img;
  imgCache = {};
  currentImage = 0;
  speed = 0.15
  speedY = 0;
  acceleration = 2.5;
  otherDirection = false;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25)
  }

  jump() {
    this.speedY = 30;
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  isAboveGround() {
    return this.y < 140;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let image = new Image();
      image.src = path,
        this.imgCache[path] = image;
    });
  }

  playAnimation(images) {
    let i = this.currentImage % this.imagesWalking.length;
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }
}
