const Engine = Matter.Engine;
const Body = Matter.Body;
const Common = Matter.Common;
const Bodies = Matter.Bodies;
const World = Matter.World;

const groundObj = new ground(10, 730, 2200, 20);

const leftSideObj = new ground(700, 665, 20, 110);

const rightSideObj = new ground(900, 665, 20, 110);

let engine;
let world;
var ball;
let groundplane;

var groundbase_options = {
	isStatic: true,
	render: { fillStyle: '#FFFF00' }
  };

function setup() {
	createCanvas(1100, 760);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
		render: { fillStyle: '#FFFFFF' }
	};

	ball = Bodies.circle(100, 10, 20, ball_options);
	World.add(world, ball);
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	background("black");
	Engine.update(engine);
	fill('white');
	ellipse(ball.position.x, ball.position.y, 20);
	fill("yellow");
	groundObj.display();
	leftSideObj.display();
	rightSideObj.display();
}

function keyPressed() {

	if (keyCode === UP_ARROW) {
		//console.log('Arrow up key pressed!');
		var forceMagnitude = 0.02 * ball.mass;

		Body.applyForce(ball, ball.position, {
			x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([-1, 1]),
			y: -forceMagnitude + Common.random() * -forceMagnitude
		});
	}

}