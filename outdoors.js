status = "";
outdoors_image = "";

function preload(){
    outdoors_image = loadImage("desk.jpg");
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
    object_Detector.detect(outdoors_image, gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(outdoors_image,0,0,640,450);
}