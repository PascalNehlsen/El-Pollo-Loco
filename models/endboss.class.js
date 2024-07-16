/**
 * Represents an end boss character in the game, extending from MovableObject.
 */
class Endboss extends MovableObject {
    /**
     * @type {number} - Width of the end boss.
     */
    width = 250;

    /**
     * @type {number} - Height of the end boss.
     */
    height = 400;

    /**
     * @type {number} - Initial vertical position of the end boss.
     */
    y = 60;

    /**
     * @type {string[]} - Array of paths to images for the alert animation.
     */
    imagesAlert = [
        './img/4_enemie_boss_chicken/2_alert/G5.png',
        './img/4_enemie_boss_chicken/2_alert/G6.png',
        './img/4_enemie_boss_chicken/2_alert/G7.png',
        './img/4_enemie_boss_chicken/2_alert/G8.png',
        './img/4_enemie_boss_chicken/2_alert/G9.png',
        './img/4_enemie_boss_chicken/2_alert/G10.png',
        './img/4_enemie_boss_chicken/2_alert/G11.png',
        './img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    /**
     * @type {string[]} - Array of paths to images for the walking animation.
     */
    imagesWalking = [
        './img/4_enemie_boss_chicken/1_walk/G1.png',
        './img/4_enemie_boss_chicken/1_walk/G2.png',
        './img/4_enemie_boss_chicken/1_walk/G3.png',
        './img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    /**
     * @type {string[]} - Array of paths to images for the attack animation.
     */
    imagesAttack = [
        './img/4_enemie_boss_chicken/3_attack/G13.png',
        './img/4_enemie_boss_chicken/3_attack/G14.png',
        './img/4_enemie_boss_chicken/3_attack/G15.png',
        './img/4_enemie_boss_chicken/3_attack/G16.png',
        './img/4_enemie_boss_chicken/3_attack/G17.png',
        './img/4_enemie_boss_chicken/3_attack/G18.png',
        './img/4_enemie_boss_chicken/3_attack/G19.png',
        './img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    /**
     * @type {string[]} - Array of paths to images for the hurt animation.
     */
    imagesHurt = [
        './img/4_enemie_boss_chicken/4_hurt/G21.png',
        './img/4_enemie_boss_chicken/4_hurt/G22.png',
        './img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    /**
     * @type {string[]} - Array of paths to images for the dead animation.
     */
    imagesDead = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    /**
     * @type {{ energyLevel: number, xThreshold: number }[]} - Array of conditions triggering specific animations based on energy level and x position.
     */
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

    /**
     * Creates an instance of Endboss.
     */
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



    /**
     * Initiates the animation sequence for the end boss.
     */
    animate() {
        setInterval(() => {
            if (this.energy <= 0) {
                this.playDeadAnimation();
                return;
            }
            this.playAnimation(this.imagesAlert);
            this.flipAnimation();
        }, 200);
    }

    /**
     * Checks conditions and triggers appropriate animations and actions when hit.
     */
    flipAnimation() {
        for (const condition of this.conditions) {
            if (this.energy === condition.energyLevel && this.x > condition.xThreshold) {
                if (!soundMuted) {
                    endboss_hit.play();
                }
                this.playAnimation(this.imagesHurt);
                setTimeout(() => {
                    this.playAnimation(this.imagesAttack);
                    this.moveLeft();
                }, 1000);
                break;
            }
        }
    }

    /**
     * Plays the dead animation and ends the game upon end boss defeat.
     */
    playDeadAnimation() {
        this.playAnimation(this.imagesDead);
        setTimeout(() => {
            document.getElementById('game-win').style.display = 'block';
            document.getElementById('menu-bar').style.display = 'flex';
            document.getElementById('restart-game').style.display = 'flex';
            document.getElementById('legal').style.display = '';
            if (!soundMuted) {
                win_sound.play();
            }
            this.clearAllIntervals();
        }, 1000);
    }

    /**
     * Clears all intervals and stops game sounds.
     */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
        game_sound.pause();
    }
}
