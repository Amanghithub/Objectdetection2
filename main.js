img = "";
status = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    textSize(20);
    text("Dog",45,85);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    noStroke();

    fill("#00FF00")
    text("Cat",320,55);
    noFill();
    stroke("#00FF00")
    rect(300,30,300,350);
    noStroke();
}

function modelLoaded(){
console.log("Model Loaded");
status = true;
objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}