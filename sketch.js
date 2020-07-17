var Stage;
var c = ('rgb(0%, 0%, 100%)');
var g =('hsb(160, 100%, 50%)');
var test = false;
var random;
var boxes;
var terrain;
var game = true;
var size = 20;
let ele;
let spr;
let spr1;
let playerImg;
let player;


var sun = 240;
function preload() {
    playerImg = loadImage('player.png');
}
function setup(){
    Stage = new stage();
    boxes = new Group();
    
    
    frameRate(60)
    createCanvas(1000,500 ,WEBGL);
    background('skyblue');
    spr1 = createSprite(width / 2 - 300, height / 2, 20, 30);
    spr1.addImage(playerImg)
    spr1.position.x = mouseX;
    spr1.position.y = mouseY;
    //spr1.velocity.y = 0.5;
    terrain = Stage.cFstage(width,height)
    for(var x = 0; x <= terrain.length; x++){
        var y = terrain[x];
        //rect(x * 20 - width/2,y*10, 20,20)
        if(y > 160 ){
            fill(c);
            
            var deep = y - 170;
            var deepBlock = deep / 30;

            for(var blocks = 0; blocks <= deepBlock; blocks ++){
                rect(x*30 - width /2, y - blocks*30, 30,30);
            }
            
        }
        else{
            fill(g);
        }
        
        //rect(x*30 - width /2, y*30, 30, 30);
        for(var under = y*10; under < height/2; under += 20){
            //rect(x * 30 - width/2 , under  ,30,30)
            spr = createSprite(x * 20 - width/2 , under  ,20,20)
            //spr.shapeColor = color(200,100,30);
            //spr.shapeColor = color(0, 150, 0);
            boxes.add(spr)
            if(under < y*11+20){
                spr.shapeColor = color(0, 150, 0);
            }else{
                spr.shapeColor = color(150,100,30);
            //terrain['UnderX' + x + 'under'+num2] = under;
            }
        }
        fill(255, 204, 0)
        ellipse(sun, -180, 120);
    }
    
    //terrain(width,height);

    //ellipse(200, -180, 120);
    console.log(terrain);
    fill(0);
}
function draw(){
    background('skyblue');
    
    fill(0)
    /*terrain.forEach(function(x, y) {
        
        rect(10*x, -y, 20, 20);
    });*/
    /*for(var num of terrain) {
            for(var x; x < 1; x++){
            fill(100);
            var y = num*10
            rect(x*20, -y, 20, 20);
        }
        
    }*/
    /*for(var x = 0; x <= terrain.length; x++){
        var y = terrain[x];
        //rect(x * 20 - width/2,y*10, 20,20)
        if(y > 160 ){
            fill(c);
            
            var deep = y - 170;
            var deepBlock = deep / 30;

            for(var blocks = 0; blocks <= deepBlock; blocks ++){
                rect(x*30 - width /2, y - blocks*30, 30,30);
            }
            
        }
        else{
            fill(g);
        }
        
        //rect(x*30 - width /2, y*30, 30, 30);
        for(var under = y*10; under < height/2; under += 30){
            //rect(x * 30 - width/2 , under  ,30,30)
            spr = createSprite(x * 30 - width/2 , under  ,30,30)
            spr.shapeColor = color(255);
            
            if(under < y*10+30){
                fill(g);
            }else{
                fill(255, 204, 0)
            //terrain['UnderX' + x + 'under'+num2] = under;
            }
        }
        fill(255, 204, 0)
        ellipse(sun, -180, 120);
    }*/
    
    
    //spr1.position.x = mouseX;
    //spr1.position.y = mouseY;
    spr1.addSpeed(0.25, 90);
    spr1.collide(boxes);
    
    drawSprites();


    


}

function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
      spr1.setSpeed(1.5, 0);
    }
    else if (keyCode == DOWN_ARROW) {
      spr1.setSpeed(1.5, 90);
    }
    /*else if (keyCode == LEFT_ARROW) {
      spr1.setSpeed(1.5, 180);
    }*/
    else if (keyCode == UP_ARROW) {
      spr1.setSpeed(10, 270);
    }
    else if (key == ' ') {
      spr1.setSpeed(0,0);
    }
    return false;
}