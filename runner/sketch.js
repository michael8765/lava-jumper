var runner, lava, plat
var deaths, gamestate, platGroup

function preload(){
  platGroup = new platGroup()

}

function setup() {
 createCanvas(600,400)
  runner = createSprite(200,200,20,20)
  runner.shapeColor="green";

  lava = createSprite(300,350,600,100)
  lava.shapeColor="red"

  deaths = 0

  gamestate = "menu"
}

function draw() {
 background("black")

  if(gamestate === "menu"){
    textSize(20)  
    text("space to start",200,200)
    runner.visible = false
    runner.velocityY = 0
    lava.visible = false
    if (keyDown("space")){
     gamestate = "play"
      }
  }


  if(gamestate === "play"){
    platMaker()
    runner.collide(plat)
    text("deaths:"+deaths,100,100)

    if(keyDown("space")){
      runner.velocityY=-7
    }
   
    runner.visible=true
    runner.velocityY = runner.velocityY+0.5
    //runner.collide(lava)
 
    lava.visible=true
 
    if(runner.isTouching(lava)){
      runner.x=200
      runner.y=200
      deaths = deaths+1
     }
     
     
}
 
 drawSprites()
}

function platMaker(){
  if(frameCount % 50 === 0){
   
   var rand = Math.round(random(1,2))
   switch(rand){
     case 1: plat = createSprite(650,100,50,10)
             plat.velocityX=-5
             runner.collide(plat)
       break;
     case 2: plat = createSprite(650,200,50,10)
             plat.velocityX=-5
             runner.collide(plat)
       break;
 }
 // platGroup.add(plat)
  //runner.collide(platGroup)
}
}