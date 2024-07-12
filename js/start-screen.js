function startGame() {
    document.getElementById('start-screen').style.display = 'none';
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