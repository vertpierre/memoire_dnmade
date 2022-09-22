var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;
var wallLeft;
var wallRight;
var MouseConstraint = Matter.MouseConstraint;
var Mouse = Matter.Mouse;

function Box(x, y, w, h) {
  var options = {
    friction: 0.3,
    restitution: 0.6,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    rect(0, 0, this.w, this.h);
    pop();
  };
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(width / 2, height, width, 40, options);
  wallLeft = Bodies.rectangle(0, height / 2, 40, height, options);
  wallRight = Bodies.rectangle(width, height / 2, 40, height, options);

  World.add(world, ground);
  World.add(world, wallLeft);
  World.add(world, wallRight);

  for (let i = 0; i < 10; i++) {
    boxes.push(new Box(width / random(1.5, 2.5), -height / 2, random(100, 300), random(100, 300)));
  }
}

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  noStroke(255);
  fill(50);
  rectMode(CENTER);
}
