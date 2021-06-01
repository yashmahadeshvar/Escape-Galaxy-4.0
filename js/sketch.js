var canvas;
var gameState=0;
var form,game;
var astroJet,astroJetIMG;
var xp,xpIMG,xpGroup;
var meteor,meteorIMG,meteorGroup;
var alien,ufo,boss,fireBall,fireBallIMG,fireBall2IMG;
var alienGroup,UFOGroup,fireBallGroup2,fireBall2;
var alienIMG,ufoIMG,bossIMG;
var bg,bg2,backgroundIMG;
var out,outIMG;
var startButton,startButtonIMG;
var helth1,helth2,helth1IMG,helth2IMG
var score = 0;
var xp1 = 0;

function preload(){
  backgroundIMG = loadImage("images/galex.jpg");
  alienIMG = loadImage("images/alien.png");
  astroJetIMG = loadImage("images/jet.png");
  ufoIMG = loadImage("images/UFO.png");
  startButtonIMG = loadImage("images/start.png");
  outIMG = loadImage("images/outlook.png");
  fireBallIMG = loadImage("images/fireBall.png");
  fireBall2IMG = loadImage("images/laser.png");
  bossIMG = loadImage("images/boss.png");
  xpIMG = loadImage("images/xp.png");
  meteorIMG = loadImage("images/meteor.png");
  helth1IMG = loadImage("images/helth1.png");
  helth2IMG = loadImage("images/helth2.png");

}

function setup() {
  createCanvas(400,625);
  game = new Game();
  game.start();
  game.setLevel1();

  fireBallGroup=createGroup();
  alienGroup=createGroup();
  xpGroup=createGroup();
  meteorGroup=createGroup();
  
}

function draw() {
  background(0);
  drawSprites();
            
  if(gameState === 0){
                 
    fill("gold");
    textSize(30);
    text("-Escape Galaxy-",90,50);
    textSize(15);
    text("Level 1 : Instructions \n1. Use mouse To move\n2. Destroy aliens to proceed further",100,250);

    if(mousePressedOver(startButton)){
      gameState = 1;
      bg.visible=false;
      startButton.visible = false;
    }
  }

  if(gameState===1){
    game.playLevel1();
  }

            // if(gameState === 1){
            //   game.setLevel1();
            //   createfireBall2();
            // }

            
            // if(keyDown("space")){
            //   createfireBall();
            // }
            
           // if(fireBallGroup.isTouching(alien)){
            //  alien.destroyEach();
            //  score = 0;
           // }
}


function UFOSpawn() {
  if(frameCount % 50 === 0){
    var ufo = createSprite(0,Math.round(random(200, 50)), 20,20);
    ufo.addImage(ufoIMG);
    ufo.velocityY = -(9+(score/4));
    ufo.lifetime = 400;
    ufo.scale = 0.5; 
   //UFOGroup.add(ufo);
 }
        
}

