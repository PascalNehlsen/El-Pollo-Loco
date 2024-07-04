class Bottle extends MovableObject {
    width = 80;
    height = 80;
    imagesBottle = [
        './img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        './img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ]

    offset = {
        left: 25,
        top: 15,
        right: 25,
        bottom: 10
    };

    constructor(imagePath) {
        super().loadImage(imagePath);
        this.x = 300 + Math.random() * 2000;
        this.y = 350;
    }
}
