class Endboss extends MovableObject {
    width = 250;
    height = 400;
    y = 60;
    imagesAlert = [
        './img/4_enemie_boss_chicken/2_alert/G5.png',
        './img/4_enemie_boss_chicken/2_alert/G6.png',
        './img/4_enemie_boss_chicken/2_alert/G7.png',
        './img/4_enemie_boss_chicken/2_alert/G8.png',
        './img/4_enemie_boss_chicken/2_alert/G9.png',
        './img/4_enemie_boss_chicken/2_alert/G10.png',
        './img/4_enemie_boss_chicken/2_alert/G11.png',
        './img/4_enemie_boss_chicken/2_alert/G12.png',
    ]

    imagesWalking = [
        './img/4_enemie_boss_chicken/1_walk/G1.png',
        './img/4_enemie_boss_chicken/1_walk/G2.png',
        './img/4_enemie_boss_chicken/1_walk/G3.png',
        './img/4_enemie_boss_chicken/1_walk/G4.png'
    ]

    imagesAttack = [
        './img/4_enemie_boss_chicken/3_attack/G13.png',
        './img/4_enemie_boss_chicken/3_attack/G14.png',
        './img/4_enemie_boss_chicken/3_attack/G15.png',
        './img/4_enemie_boss_chicken/3_attack/G16.png',
        './img/4_enemie_boss_chicken/3_attack/G17.png',
        './img/4_enemie_boss_chicken/3_attack/G18.png',
        './img/4_enemie_boss_chicken/3_attack/G19.png',
        './img/4_enemie_boss_chicken/3_attack/G20.png'
    ]

    imagesHurt = [
        './img/4_enemie_boss_chicken/4_hurt/G21.png',
        './img/4_enemie_boss_chicken/4_hurt/G22.png',
        './img/4_enemie_boss_chicken/4_hurt/G23.png'
    ]

    imagesDead = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ]

    conditions = [
        { energyLevel: 90, xThreshold: 4300 },
        { energyLevel: 80, xThreshold: 4100 },
        { energyLevel: 70, xThreshold: 3900 },
        { energyLevel: 60, xThreshold: 3700 },
        { energyLevel: 50, xThreshold: 3500 },
        { energyLevel: 40, xThreshold: 3300 },
        { energyLevel: 30, xThreshold: 3100 },
        { energyLevel: 20, xThreshold: 2900 },
        { energyLevel: 10, xThreshold: 2700 }
    ];
    constructor() {
        super().loadImage(this.imagesWalking[0]);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesAlert);
        this.loadImages(this.imagesAttack);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
        this.x = 4500;
        this.speed = 50;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.energy <= 0) {
                this.playAnimation(this.imagesDead);
                setTimeout(() => {
                    document.getElementById('game-win').style.display = "block";
                    this.clearAllIntervals();
                }, 1000);
                return;
            }

            this.playAnimation(this.imagesAlert);

            for (const condition of this.conditions) {
                if (this.energy === condition.energyLevel && this.x > condition.xThreshold) {
                    this.playAnimation(this.imagesHurt);

                    setTimeout(() => {
                        this.playAnimation(this.imagesAttack);
                        this.moveLeft();
                    }, 1000);
                    break;
                }
            }
        }, 200);
    }

    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
}

