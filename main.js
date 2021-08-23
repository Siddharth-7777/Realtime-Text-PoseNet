nosex = 0;
nosey = 0;
rwx = 0;
lwx = 0;
dif = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560,90)
    poseNet = ml5.poseNet(video, cheat)
    poseNet.on('pose', gotPoses)
}

function cheat() {
    console.log("Cheat Operation is Successful! NOW we have to win the cheating competition.")
}

function gotPoses(error, results) {
    if (error) {
       console.log(error)
    } else {
       if (results.length > 0) {
           console.log(results)
       }
    }
}