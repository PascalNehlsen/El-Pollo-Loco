class BabyChicken extends MovableObject {
    width = 50;
    height = 50;
    y = 380;
    imagesWalking = [
        './img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ]

    imagesDead = [
        './img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ]

    offset = {
        left: 0,
        top: 2,
        right: 0,
        bottom: 5
    };

    constructor() {
        super().loadImage(
            './img/3_enemies_chicken/chicken_small/1_walk/1_w.png'
        );
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesDead);

        this.speed = 0.15 + Math.random() * 1;
        this.x = 2000 + Math.random() * 4100;
        this.animate();
    }

    animate() {
        this.moveBabyChicken();
        this.playChickenAnimations();
    }

    playChickenAnimations() {
        setInterval(() => {
            if (this.energy == 0) {
                this.playAnimation(this.imagesDead);
            } else {
                this.playAnimation(this.imagesWalking);
            }
        }, 200);
    }

    moveBabyChicken() {
        setInterval(() => {
            if (this.isDead()) return;
            this.moveLeft();
            this.otherDirection = false;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) return;
            this.jump();
        }, 1000);
    }

}
