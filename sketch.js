var bg;
var mouse,mouseCheese,mouseDance,mouseCollide;
var catRest, catChase, catCollide;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    mouseCheese = loadImage("images/mouse1.png");
    mouseDance = loadAnimation("images/mouse3.png","images/mouse2.png");
    mouseCollide = loadImage("images/mouse4.png");

    catCollide = loadImage("images/cat4.png");
    catChase = loadAnimation("images/cat3.png","images/cat2.png");
    catRest = loadImage("images/cat1.png");



    
}

function setup(){
    createCanvas(1000,800);
    
    mouse = createSprite(100,420,20,20);
mouse.addAnimation("mouse1",mouseCheese);
mouse.addAnimation("mouse4",mouseCollide);
mouse.addAnimation("mouse3",mouseDance);
mouse.scale = 0.16;

cat = createSprite(580,420,20,20);
cat.addAnimation("cat1",catRest);
cat.addAnimation("cat4",catCollide);
cat.addAnimation("cat3",catChase);
cat.scale = 0.16;




    

}

function draw() {

    background(bg);

    if(cat.x - mouse.x < (cat.width/2 - mouse.width/2)+20
    ){

      mouse.changeAnimation("mouse4",mouseCollide);

      cat.velocityX = 0;

      cat.changeAnimation("cat4",catCollide);
    }
   
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW) {

        cat.velocityX = -3;
    
        cat.changeAnimation("cat3",catWalk);
    
        mouse.changeAnimation("mouse3",mouseDance);


}
}
