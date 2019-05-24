const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let pressed = false;
let x = 0;
let y = 0;

canvas.addEventListener("mousedown", function(e) {
  x = e.x;
  y = e.y;
  pressed = true;
});

canvas.addEventListener("mousemove", function(e) {
  if (!pressed) return;
  ctx.beginPath();
  ctx.moveTo(x, y);
  x = e.x;
  y = e.y;
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();
});

canvas.addEventListener("mouseup", function(e) {
  pressed = false;
});
