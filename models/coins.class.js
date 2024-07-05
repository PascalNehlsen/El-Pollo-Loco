class Coin extends MovableObject {
    width = 120;
    height = 120;
    imagesCoin = [
        './img/8_coin/coin_1.png',
        './img/8_coin/coin_2.png',
    ]

    offset = {
        left: 40,
        top: 40,
        right: 40,
        bottom: 40
    };

    constructor() {
        super().loadImage(
            './img/8_coin/coin_1.png'
        );
        this.loadImages(this.imagesCoin);
        this.x = 300 + Math.random() * 4100;
        this.y = Math.random() * 340;
        this.animate();
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesCoin);
        }, 1000);
    }
}
