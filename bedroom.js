status = "";
bedroom_image = "";

function preload(){
    bedroom_image = loadImage("bedroom.jpg");
}

function setup(){
    canvas = createCanvas(640,450);
    canvas.center();
    canvas.position(415, 220);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(bedroom_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(bedroom_image,0,0,640,450);
}