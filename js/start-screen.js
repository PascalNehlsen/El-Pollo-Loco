/**
 * Main file for game initialization and event handling.
 */

/**
 * Indicates whether sound is muted.
 * @type {boolean}
 */
let soundMuted = false;

/**
 * Indicates whether only music is playing.
 * @type {boolean}
 */
let onlyMusic = false;

/**
 * Starts the game by hiding start and end screens and initializing the game.
 */
function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('game-win').style.display = 'none';
    document.getElementById('mobile-description-container').style.display = 'none';
    document.getElementById('legal').style.display = 'none';
    init();
}

/**
 * Event listener for the fullscreen toggle button.
 */
document.getElementById('resize').addEventListener('click', toggleFullscreen);

/**
 * Event listener for the fullscreen change event.
 */
document.addEventListener('fullscreenchange', function () {
    if (!document.fullscreenElement) {
        exitFullscreen();
    }
});

/**
 * Event listener for the Escape key to exit fullscreen.
 * @param {KeyboardEvent} event - The keyboard event object.
 */
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen();
    }
});

/**
 * Adjusts the sound settings (mute, only music, loud) based on current state.
 */
let audioBtn = document.getElementById('audio');
function adjustSound() {
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
        game_sound.pause();
        setTooltipText('Sound is muted');
    } else if (currentSrc.endsWith('sound-mute.png')) {
        audioBtn.src = './img/icons/audio-loud.png';
        soundMuted = false;
        onlyMusic = false;
        setTooltipText('Sound is loud');
    }
}

/**
 * Sets the tooltip text for the audio button.
 * @param {string} text - The tooltip text to set.
 */
function setTooltipText(text) {
    audioBtn.title = text;
}

/**
 * Toggles fullscreen mode for the game.
 */
function toggleFullscreen() {
    let elem = document.getElementById('canvas-container');
    if (!document.fullscreenElement) {
        openFullscreen(elem);
    } else {
        document.exitFullscreen();
    }
}

/**
 * Opens fullscreen mode for a specific element.
 * @param {HTMLElement} elem - The element to open fullscreen for.
 */
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
    resizeCanvas();
}

/**
 * Exits fullscreen mode and resets screen elements.
 */
function exitFullscreen() {
    setCanvas();
    setStartscreen();
    setGameoverScreen();
    setWinScreen();
}

/**
 * Sets styles for the win screen when in fullscreen.
 */
function setWinScreen() {
    let win = document.getElementById('game-win');
    win.style.height = '';
    win.style.width = '';
    win.style.borderRadius = '';
}

/**
 * Sets styles for the game over screen when in fullscreen.
 */
function setGameoverScreen() {
    let gameover = document.getElementById('game-over');
    gameover.style.height = '';
    gameover.style.width = '';
    gameover.style.borderRadius = '';
}

/**
 * Sets styles for the start screen when in fullscreen.
 */
function setStartscreen() {
    let startscreen = document.getElementById('start-screen');
    startscreen.style.height = '';
    startscreen.style.width = '';
    startscreen.style.borderRadius = '';
}

/**
 * Sets styles for the game canvas when in fullscreen.
 */
function setCanvas() {
    let canvas = document.getElementById('canvas');
    canvas.style.height = '';
    canvas.style.width = '';
    canvas.style.borderRadius = '';
}

/**
 * Resizes the game canvas to fullscreen dimensions.
 */
function resizeCanvas() {
    fullCanvas();
    fullStartscreen();
    fullGameoverscreen();
    fullWinscreen();
}

/**
 * Sets fullscreen styles for the win screen.
 */
function fullWinscreen() {
    let win = document.getElementById('game-win');
    win.style.height = '100%';
    win.style.width = '100%';
    win.style.borderRadius = 'unset';
}

/**
 * Sets fullscreen styles for the game over screen.
 */
function fullGameoverscreen() {
    let gameover = document.getElementById('game-over');
    gameover.style.height = '100%';
    gameover.style.width = '100%';
    gameover.style.borderRadius = 'unset';
}

/**
 * Sets fullscreen styles for the start screen.
 */
function fullStartscreen() {
    let startscreen = document.getElementById('start-screen');
    startscreen.style.height = '100%';
    startscreen.style.width = '100%';
    startscreen.style.borderRadius = 'unset';
}

/**
 * Sets fullscreen styles for the game canvas.
 */
function fullCanvas() {
    let canvas = document.getElementById('canvas');
    canvas.style.height = '100%';
    canvas.style.width = '100%';
    canvas.style.borderRadius = 'unset';
}

/**
 * Checks if the current device is a mobile device.
 * @returns {boolean} True if the device is a mobile device, false otherwise.
 */
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

/**
 * Checks the orientation of the device and adjusts UI accordingly.
 */
function checkDeviceOrientation() {
    if (isMobileDevice()) {
        if (window.matchMedia("(orientation: portrait)").matches) {
            setMobileDeviceHeight();
        } else {
            setMobileDeviceWidth();
        }
    } else {
        setNoMobileDevice();
    }
}

/**
 * Sets UI for when the device is not a mobile device.
 */
function setNoMobileDevice() {
    document.getElementById('mobile-bindings').style.display = 'none';
    document.getElementById('mobile-info').style.display = 'none';
    document.getElementById('description-container').style.display = 'flex';
    document.getElementById('resize').style.display = 'flex';
    document.getElementById('play-btn-img').style.opacity = '';
    document.getElementById('legal').style.display = '';
    document.getElementById('legal').style.position = '';
    document.getElementById('legal').style.bottom = '';
}

/**
 * Sets UI for when the device is in landscape orientation.
 */
function setMobileDeviceWidth() {
    document.getElementById('menu-bar').style.display = '';
    document.getElementById('description-container').style.display = 'none';
    document.getElementById('mobile-bindings').style.display = 'flex';
    document.getElementById('mobile-info').style.display = 'flex';
    document.getElementById('turn-device').style.display = 'none';
    document.getElementById('play-btn-img').style.opacity = '0.8';
    document.getElementById('legal').style.position = 'absolute';
    document.getElementById('legal').style.bottom = '5px';
    document.getElementById('legal').style.display = '';
}

/**
 * Sets UI for when the device is in portrait orientation.
 */
function setMobileDeviceHeight() {
    document.getElementById('menu-bar').style.display = 'none';
    document.getElementById('turn-device').style.display = 'flex';
    document.getElementById('turn-device').style.position = 'absolute';
    document.getElementById('turn-device').style.left = '0';
    document.getElementById('turn-device').style.right = '0';
    document.getElementById('turn-device').style.top = '0';
    document.getElementById('turn-device').style.bottom = '0';
    document.getElementById('play-btn-img').style.opacity = '';
    document.getElementById('legal').style.position = '';
    document.getElementById('legal').style.bottom = '';
    document.getElementById('legal').style.display = '';
}


// Initial device orientation check
checkDeviceOrientation();

// Event listeners for device orientation changes
window.addEventListener('resize', checkDeviceOrientation);
window.addEventListener('orientationchange', checkDeviceOrientation);

/**
 * Toggle display of legal notice section.
 */
let privacyPolicy = document.getElementById('privacy-policy');
let legalNotice = document.getElementById('legal-notice');
function toggleLegalNotice() {
    if (legalNotice.style.display === 'block') {
        legalNotice.style.display = 'none';
    } else {
        legalNotice.style.display = 'block';
        privacyPolicy.style.display = 'none';
    }
}

/**
 * Toggle display of privacy policy section.
 */
function togglePrivacyPolicy() {
    if (privacyPolicy.style.display === 'block') {
        privacyPolicy.style.display = 'none';
    } else {
        privacyPolicy.style.display = 'block';
        legalNotice.style.display = 'none';
    }
}

function mobileInformation() {
    let mobileInfo = document.getElementById('mobile-description-container');
    if (mobileInfo.style.display === 'none') {
        mobileInfo.style.display = '';
    } else {
        mobileInfo.style.display = 'none';
    }
    mobileInfo.style.position = 'absolute';
    mobileInfo.style.top = '0';
}