const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12;
var box13, box14, box15;
var box16;
var box17, box18, box19;
var box20, box21;
var box22;

var ground, ground2, ground3;

var slingshot;

var polygon;
var polygon_img;

var bgImg;

var score = 0;

var gameState = "on slingshot";

function preload() {
    polygon_img = loadImage("polygon.png");
    getBackgroundImg();
}

function setup() {
    createCanvas(1000, 500);
    rectMode(CENTER);
    
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(100, 450, 2000, 20);
    ground2 = new Ground(750, 175, 250, 20);
    ground3 = new Ground(450, 350, 250, 20);
    
    box1 = new Box(390, 327, 25, 35);
    box2 = new Box(410, 327, 25, 35);
    box3 = new Box(430, 327, 25, 35);
    box4 = new Box(450, 327, 25, 35);
    box5 = new Box(470, 327, 25, 35);
    box6 = new Box(490, 327, 25, 35);
    box7 = new Box(510, 327, 25, 35);
    
    box8 = new Box(410, 302, 25, 35);
    box9 = new Box(430, 302, 25, 35);
    box10 = new Box(450, 302, 25, 35);
    box11 = new Box(470, 302, 25, 35);
    box12 = new Box(490, 302, 25, 35);
    
    box13 = new Box(430, 277, 25, 35);
    box14 = new Box(450, 277, 25, 35);
    box15 = new Box(470, 277, 25, 35);
    
    box16 = new Box(450, 252, 25, 35);
    
    box17 = new Box(715, 150, 35, 35);
    box18 = new Box(755, 150, 35, 35);
    box19 = new Box(780, 150, 35, 35);
    
    box20 = new Box(745, 105, 35, 35);
    box21 = new Box(760, 110, 40, 35);
    
    box22 = new Box(750, 95, 35, 35);
    
    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
    slingshot = new SlingShot(polygon, {x : 180, y : 290});
}

function draw() {
    if(bgImg) {
        background(bgImg);
    }
    
    noStroke();
    textSize(20);
    fill(255, 255, 255);
    text("Score :" + score, 650, 40);
    text("Press the space key for another chance", 400, 380);
    
    Engine.update(engine);
    
    strokeWeight(2);
    
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    
    box16.display();
    box16.score();
    
    box17.display();
    box17.score();
    box18.display();
    box18.score();
    box19.display();
    box19.score();
    
    box20.display();
    box20.score();
    box21.display();
    box21.score();
    
    box22.display();
    box22.score();
    
    ground.display();
    ground2.display();
    ground3.display();
    
    fill("gold");
    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
    
    slingshot.display();
}

function mouseDragged() {
    if(gameState !== "launched") {
        Matter.Body.setPosition(this.polygon, {
            x : mouseX,
            y : mouseY
        });
    }
}

function mouseReleased() {
    slingshot.fly();
    gameState = "launched";
}

function keyPressed() {
    if(keyCode === 32) {
        slingshot.attach(this.polygon);
        gameState = "on slingshot";
    }
}

async function getBackgroundImg() {
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var date = responseJSON.datetime;
    var hour = date.slice(11, 13);
    
    if(hour >= 06 && hour <= 19) {
        bg = "fortress of solitude.jpg"
    }
    else {
        bg = "batcave.jpg"
    }
    bgImg = loadImage(bg);
    console.log(bgImg)
}