let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  initlevel();
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  mobileEvents();
}

window.addEventListener('keydown', (event) => {
  if (event.key == 'ArrowRight') {
    keyboard.RIGHT = true;
  }
  if (event.key == 'ArrowLeft') {
    keyboard.LEFT = true;
  }
  if (event.key == 'ArrowUp') {
    keyboard.UP = true;
  }
  if (event.key == 'ArrowDown') {
    keyboard.DOWN = true;
  }
  if (event.key == ' ') {
    keyboard.SPACE = true;
  }
  if (event.key == 'd') {
    keyboard.D = true;
  }
});

window.addEventListener('keyup', (event) => {
  if (event.key == 'ArrowRight') {
    keyboard.RIGHT = false;
  }
  if (event.key == 'ArrowLeft') {
    keyboard.LEFT = false;
  }
  if (event.key == 'ArrowUp') {
    keyboard.UP = false;
  }
  if (event.key == 'ArrowDown') {
    keyboard.DOWN = false;
  }
  if (event.key == ' ') {
    keyboard.SPACE = false;
  }
  if (event.key == 'd') {
    keyboard.D = false;
  }
});

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
