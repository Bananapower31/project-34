const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject, groundObject;
var world;

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;
  dustbinObj = new dustbin(1200, 650);
  paperObject = new paper(200, 450, 40);
  groundObject = new ground(width / 2, 670, width, 20);
  //Create a Ground

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1200,
      height: 700,
      wireframes: false,
    },
  });

  Engine.run(engine);
  //Render.run(render);
}

function draw() {
  rectMode(CENTER);
  background(0);

  dustbinObj.display();
  paperObject.display();
  groundObject.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body, paperObject.body.position, {
      x: 30,
      y: -30,
    });
  }
}

$(".force").on("click", function () {
  Body.applyForce(
    ball,
    { x: ball.position.x, y: ball.position.y },
    { x: 0.05, y: 0 }
  );
});

$(".vforce").on("click", function () {
  Body.applyForce(
    ball,
    { x: ball.position.x, y: ball.position.y },
    { x: 0, y: -0.05 }
  );
});

/* var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

var engine = Engine.create();

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 400,
    wireframes: false
  }
});

var topWall = Bodies.rectangle(400, 50, 720, 20, { isStatic: true });
var leftWall = Bodies.rectangle(50, 210, 20, 300, { isStatic: true });
var rightWall = Bodies.rectangle(750, 210, 20, 300, { isStatic: true });
var bottomWall = Bodies.rectangle(400, 350, 720, 20, { isStatic: true });

var ball = Bodies.circle(90, 280, 20);

World.add(engine.world, [topWall, leftWall, rightWall, bottomWall, ball]);

Engine.run(engine);

Render.run(render);

$('.force').on('click', function () {
    Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0.05, y: 0});
});


$('.vforce').on('click', function () {
    Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0, y: -0.05});
});*/
