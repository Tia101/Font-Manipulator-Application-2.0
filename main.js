difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(450, 400);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);

        console.log("leftWrist = " + leftWrist + "rightWristX = "+ rightWristX + "difference = " + difference);
    }
}

function draw() {
    background('#6C91C2');

       document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#FFE787')
    text('Tia', 50, 400);
}
