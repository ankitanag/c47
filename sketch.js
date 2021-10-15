
var jet,jet_img,meteor_img;
var bg_img;

var meteoroid;
var meteroidg;
var bulletg;


function preload()
{
  jet_img = loadImage("dd.png");
  bg_img = loadImage("bg.png");
  meteor_img = loadImage("meteor.png");
}

function setup() {
  createCanvas(1000,700);

  jet = createSprite(500,600,20,20);
  jet.addImage(jet_img);
  jet.scale = 0.25;

  meteroidg = new Group();
  bulletg = new Group();



  
}

function draw() 
{
  background(51);
  image(bg_img,0,0);

  spawnMeteoroids();

  if(keyDown("space")){
    bullet();
  }

  if(keyDown("left")){
    jet.x = jet.x - 10;
  }
  if(keyDown("right")){
    jet.x = jet.x + 10;
  }

  if (bulletg.isTouching(meteroidg)) {
      meteroidg.destroyEach();
     bulletg.destroyEach();
  }

  if (meteroidg.isTouching(jet)){
    jet.destroy();
    bulletg.destroyEach();
  }

  // if(bullet.isTouching(meteoroid)){
  //   meteoroid.destroy();
  // }
 
  drawSprites();
}

function spawnMeteoroids(){
  if(frameCount % 60 === 0){
    meteoroid = createSprite(random(10,900),0,10,10);
    meteoroid.addImage(meteor_img);
    meteoroid.scale = 0.25;
    meteoroid.velocityY = 3;

    meteroidg.add(meteoroid);
  }
}



function bullet(){
  var bullet = createSprite(500,600,5,20);
  bullet.velocityY = -5;
   bullet.x = jet.x;
  bullet.shapeColor = "red";

  bulletg.add(bullet);
}


