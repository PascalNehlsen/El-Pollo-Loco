/**
 * Main file for game initialization and event handling.
 */

/**
 * The canvas element where the game is rendered.
 * @type {HTMLCanvasElement}
 */
let canvas;

/**
 * The instance of the game world.
 * @type {World}
 */
let world;

/**
 * Keyboard input control for the game.
 * @type {Keyboard}
 */
let keyboard = new Keyboard();

/**
 * Initializes the game and necessary resources.
 */
function init() {
  initlevel();
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  mobileEvents();
}

/**
 * Event handler for keyboard key down events.
 * @param {KeyboardEvent} event - The triggered keyboard event.
 */
window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowRight':
      keyboard.RIGHT = true;
      break;
    case 'ArrowLeft':
      keyboard.LEFT = true;
      break;
    case 'ArrowUp':
      keyboard.UP = true;
      break;
    case 'ArrowDown':
      keyboard.DOWN = true;
      break;
    case ' ':
      keyboard.SPACE = true;
      break;
    case 'd':
      keyboard.D = true;
      break;
  }
});

/**
 * Event handler for keyboard key up events.
 * @param {KeyboardEvent} event - The triggered keyboard event.
 */
window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'ArrowRight':
      keyboard.RIGHT = false;
      break;
    case 'ArrowLeft':
      keyboard.LEFT = false;
      break;
    case 'ArrowUp':
      keyboard.UP = false;
      break;
    case 'ArrowDown':
      keyboard.DOWN = false;
      break;
    case ' ':
      keyboard.SPACE = false;
      break;
    case 'd':
      keyboard.D = false;
      break;
  }
});

/**
 * Registers touch events for mobile control.
 */
function mobileEvents() {
  document.getElementById('move-left').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });

  document.getElementById('move-left').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });

  document.getElementById('move-right').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });

  document.getElementById('move-right').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });

  document.getElementById('move-jump').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });

  document.getElementById('move-jump').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });

  document.getElementById('move-throw').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.D = true;
  });

  document.getElementById('move-throw').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.D = false;
  });
}
