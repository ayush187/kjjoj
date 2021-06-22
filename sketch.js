var balloon,balloonImage1,balloonImage2;
var database
// create database and position variable here
database=firebase.database
console.log(database)
var balloonposition=database.ref('baloon/height')
  ballloonposition.on("value",readPosition,showError)

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
    createCanvas(1500,700);
   // database=firebase.database
   // console.log(database)

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
 // var balloonposition=database.ref('baloon/height')
 // ballloonposition.on("value",readPosition,showError)
  
  balloon.scale=0.6;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    balloon.x=balloon.x-10
  //  changePosition(-10,0)
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
   balloon.x=balloon.x+10
   //changePosition(10,0)
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    balloon.y=balloon.y-10
    //changePosition(0,-10)
    balloon.scale=balloon.scale-0.01
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    balloon.y=balloon.y+10
   //changePosition(0,10)
    balloon.scale=balloon.scale+0.01
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function changePosition(x,y){
  database.ref('balloon/height').set({
  'x':positipn.x+x,
   'y':position.y+y
  })
}
function readPosition(data){
  height=data.val()
  balloon.x=height.x
  balloon.y=height.y
}
function showError(){
  console.log("error in writing the database");
}
