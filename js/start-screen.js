let soundMuted = false;
let onlyMusic = false;

function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('game-win').style.display = 'none';
    document.getElementById('menu-bar').style.display = 'none';
    init();
}

document.getElementById('resize').addEventListener('click', toggleFullscreen);

document.addEventListener('fullscreenchange', function () {
    if (!document.fullscreenElement) {
        exitFullscreen();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen();
    }
});

let audioBtn = document.getElementById('audio');


function adjustSound() {
    let audioBtn = document.getElementById('audio');
    let currentSrc = audioBtn.src;

    if (currentSrc.endsWith('audio-loud.png')) {
        audioBtn.src = './img/icons/sound-only-music.png';
        soundMuted = true;
        onlyMusic = true;
        setTooltipText('Only music is playing');
    } else if (currentSrc.endsWith('sound-only-music.png')) {
        audioBtn.src = './img/icons/sound-mute.png';
        soundMuted = true;
        onlyMusic = false;
        setTooltipText('Sound is muted');
    } else if (currentSrc.endsWith('sound-mute.png')) {
        audioBtn.src = './img/icons/audio-loud.png';
        soundMuted = false;
        onlyMusic = false;
        setTooltipText('Sound is loud');
    }
}

function setTooltipText(text) {
    audioBtn.title = text;
}

function toggleFullscreen() {
    let elem = document.getElementById('canvas-container');
    if (!document.fullscreenElement) {
        openFullscreen(elem);
    } else {
        document.exitFullscreen();
    }
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    resizeCanvas();
}

function exitFullscreen() {
    let canvas = document.getElementById('canvas');
    canvas.style.height = '';
    canvas.style.width = '';
    canvas.style.borderRadius = '';

    let startscreen = document.getElementById('start-screen');
    startscreen.style.height = '';
    startscreen.style.width = '';
    startscreen.style.borderRadius = '';

    let gameover = document.getElementById('game-over');
    gameover.style.height = '';
    gameover.style.width = '';
    gameover.style.borderRadius = '';
}

function resizeCanvas() {
    let canvas = document.getElementById('canvas');
    canvas.style.height = '100%';
    canvas.style.width = '100%';
    canvas.style.borderRadius = 'unset';

    let startscreen = document.getElementById('start-screen');
    startscreen.style.height = '100%';
    startscreen.style.width = '100%';
    startscreen.style.borderRadius = 'unset';

    let gameover = document.getElementById('game-over');
    gameover.style.height = '100%';
    gameover.style.width = '100%';
    gameover.style.borderRadius = 'unset';
}

function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function checkDeviceOrientation() {
    if (isMobileDevice()) {
        if (window.matchMedia("(orientation: portrait)").matches) {
            console.log("Dies ist ein mobiles Gerät im Hochformat.");
            document.getElementById('mobile-bindings').style.display = 'none';
            document.getElementById('mobile-info').style.display = 'none';
        } else {
            console.log("Dies ist ein mobiles Gerät im Querformat.");
            document.getElementById('resize').style.display = 'none';
            document.getElementById('description-container').style.display = 'none';
            document.getElementById('mobile-bindings').style.display = 'flex';
            document.getElementById('mobile-info').style.display = 'flex';
        }
    } else {
        console.log("Dies ist kein mobiles Gerät.");
        document.getElementById('mobile-bindings').style.display = 'none';
        document.getElementById('mobile-info').style.display = 'none';
        document.getElementById('description-container').style.display = 'flex';
        document.getElementById('resize').style.display = 'flex';
    }
}

checkDeviceOrientation();

window.addEventListener('resize', checkDeviceOrientation);
window.addEventListener('orientationchange', checkDeviceOrientation);
