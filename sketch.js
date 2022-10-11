var bg, bgImg;
var obstacleGroup, stone, stoneImg,stone2Img;
var rewardsGroup, coin, coinImg;
var mario, mariofallImg, marioImg;
var titleImg, marioTitleImg;
var gameOverImg;

function preload(){
bgImg = loadImage("Images/Background.jpg");
stoneImg = loadImage("Images/Stone2.png");
//stone2Img = loadImage("Images/Stone.png");
coinImg = loadImage("Images/Coin.png");
//mariofallImg = loadImage("Image/MarioFall.png");
//titleImg = loadImage("Image/Title.png");
//marioTitleImg = loadImage("Image/MarioTitle.png");
//gameOverImg = loadImage("Image/GameOver.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(displayWidth/2-72,displayHeight/2-45)
  bg.addImage("bg",bgImg)
  bg.scale = 2.1

  mario = createSprite(70,displayHeight/2)
  //mario.addImage("mariofall", stone2Img)
  mario.scale = 1
  
  obstacleGroup = createGroup()

  rewardsGroup = createGroup()
}

function draw() {
  background(255,255,255);

  text("score:",500,50)
  text.scale = 20
  //text.postionX = 500
  //text.postionY =40
  
  if(keyIsDown(UP_ARROW)){
    mario.velocityY = -3
  }

  if(keyIsDown(DOWN_ARROW)){
    mario.velocityY = 3
  }

  Obstacles();
  Reward();
  
  drawSprites();
}

function Obstacles(){
  if(frameCount%80 ===0){
    var stone = createSprite(random(500,1100), 475,20,20)
    stone.addImage("stone", stoneImg);
    stone.scale = 0.3
    stone.velocityX = -2
    obstacleGroup.add(stone)
    stone.lifetime = 550;
  }
}

function Reward(){
  if(frameCount%70 === 0){
    var coin = createSprite(random(450,900), random(50,100),20,20)
    coin.addImage("coin",coinImg);
    coin.scale = 0.1
    coin.velocityX = -2
    rewardsGroup.add(coin)
    coin.lifetime = 500;
  }
}