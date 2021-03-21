function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550)
    canvas.position(560,160);

    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotPoses)
}
function draw(){
    background('#969A97');
}

function modalLoaded(){
    console.log("Posenet is Initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}