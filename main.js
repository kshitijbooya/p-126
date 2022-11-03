nosex=0;
nosey=0;
difference=0;
rightwristx=0;
leftwristx=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(400,400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw() {
    background('#18f5df');
    fill('#a8b0a5');
    stroke('#6df7d5');
    textSize(32);
    text('kSHITIJ', 10, 30);
    fill(0, 102, 153);
}


function modelLoaded(){
    console.log('PoseNet is Intalized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = " + nosex + "nosey = " + nosey);

        leftwristx = results[0].pose.leftWristx;
        rightwristx = results[0].pose.rightWristx;
        console.log("rightwrist = " + rightWristx + "leftwristx = " + leftWristx);
        difference = floor(leftwristx - rightwristx);
    }
}
