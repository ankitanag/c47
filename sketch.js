
var jet,jet_img,meteor_img;
var bg_img;

var meteoroid;
var meteroidg, meteroidg1;

var bulletg,go,go_img;
var gameState = "play";


function preload()
{
  jet_img = loadImage("dd.png");
  bg_img = loadImage("bg.png");
  meteor_img = loadImage("meteor.png");
  go_img = loadImage("game_over.png");
}

function setup() {
  createCanvas(1000,700);

  jet = createSprite(500,600,20,20);
  jet.addImage(jet_img);
  jet.scale = 0.25;

  meteroidg = new Group();
  meteroidg1 = new Group();
  bulletg = new Group();

  go = createSprite(500,350,50,50);
  go.addImage(go_img);
  go.scale = 0.25;
  go.visible = false;



  
}

function draw() 
{
  background(51);
  image(bg_img,0,0);

  if(gameState === "play"){
    spawnMeteoroids();

    if(keyDown("space") && gameState === "play"){
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
      gameState = "end"
    }

    if (meteroidg1.isTouching(jet)){
      jet.destroy();
      bulletg.destroyEach();
      gameState = "end"
    }
  
    // if(bullet.isTouching(meteoroid)){
    //   meteoroid.destroy();
    // }
  }
  if(gameState === "end"){

    go.visible = true;
       
  }
 
  drawSprites();
}

function spawnMeteoroids(){
  if(frameCount % 100 === 0){
    meteoroid = createSprite(random(10,900),0,10,10);
    meteoroid.addImage(meteor_img);
    meteoroid.scale = 0.25;
    meteoroid.velocityY = 3;

    meteroidg.add(meteoroid);
  }
}

function spawnMeteoroids1(){
  if(frameCount % 100 === 0){
    meteoroid1 = createSprite(random(10,900),0,10,10);
    meteoroid1.addImage(meteor_img);
    meteoroid1.scale = 0.25;
    meteoroid1.velocityY = 3;

    meteroidg1.add(meteoroid);
  }
}




function bullet(){
  var bullet = createSprite(500,600,5,20);
  bullet.velocityY = -5;
   bullet.x = jet.x;
  bullet.shapeColor = "red";

  bulletg.add(bullet);
}


