class MovableObject {
  x = 120;
  y = 250;
  height = 150;
  width = 100;
  img;
  imgCache = {};
  currentImage = 0;
  speed = 0.15
  otherDirection = false;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
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
    console.log('moving right');
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
