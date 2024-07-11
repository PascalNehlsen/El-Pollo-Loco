function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('menu-bar').style.display = 'none';
}

function fullscreen() {
    let fullscreen = document.getElementById('canvas-container');
    openFullscreen(fullscreen);
    resizeCanvas();
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

function resizeCanvas() {
    let canvas = document.getElementById('canvas');
    canvas.style.height = '100%';
    canvas.style.width = '100%';
    canvas.style.borderRadius = 'unset'
}