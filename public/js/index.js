//Get canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Get image
const image = document.getElementById('source');

//Animation character
const player = {
  w: 50,
  h: 70,
  x: 20,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0
};

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();
}

function detectWalls() {
  //Left wall
  if (player.x < 0) {
    player.x = 0;
  }

  //Right wall
  if (player.x + player.w > canvas.width) {
    plater.x = canvas.width - player.w;
  }

  //Top wall
  if (player.y < 0) {
    player.y = 0;
  }

  //Bottom wall
  if (player.y + player.h > canvas.height) {
    plater.y = canvas.height - player.h;
  }
}

function update() {
  clear();

  drawPlayer();

  newPos();

  requestAnimationFrame(update);
}

function moveUp() {
  player.dy = -player.speed;
}
function moveDown() {
  player.dy = player.speed;
}
function moveRight() {
  player.dx = player.speed;
}
function moveUp() {
  player.dx = -player.speed;
}
function keyDown(e) {
  if (e.key === 'ArrowRight' || 'Right') {
    moveRight();
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    moveLeft();
  } else if (e.key === 'ArrowDown' || e.key === 'Down') {
    moveDown();
  } else if (e.key === 'ArrowUp' || e.key === 'Up') {
    moveUp();
  }
}

function keyUp(e) {
  if (
    e.key == 'Right' ||
    e.key == 'ArrowRight' ||
    e.key == 'Left' ||
    e.key == 'ArrowLeft' ||
    e.key == 'Up' ||
    e.key == 'ArrowUp' ||
    e.key == 'Down' ||
    e.key == 'ArrowDown'
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);