var bird;
var pipes = [];

function preload(){
    hit = loadSound("neg.mp3");
}

function setup(){
createCanvas(400,600);
bird = new bird();
pipes.push(new Pipe())
}


function draw(){
background(0);
bird.display();
for(var o = pipes.length-1 ; o >= 0 ; o--){
    pipes[o].display();
    pipes[o].update();

    if(pipes[o].hits(bird)){
        console.log("failed");
        hit.play();
        if(keyCode===32){
            //nothing
        }
            bird.fall();
            pipes.splice(0 , length);
            console.log("you lost")
        
    }else{
        createPipe();
    }
    

    if(pipes[o].out()){
        pipes.splice(o, 1);
    }

}





}

function keyPressed(){
    if(keyCode === 32){
        bird.up();
        console.log("keyDown === SPACE")
    }
}
function createPipe(){
    if(frameCount % 100 === 0){
        pipes.push(new Pipe())
    
    }
}