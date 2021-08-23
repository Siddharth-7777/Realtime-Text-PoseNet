nosex = 0;
nosey = 0;
rwx = 0;
lwx = 0;
dif = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560,110)
    poseNet = ml5.poseNet(video, cheat)
    poseNet.on('pose', gotPoses)
}

function cheat() {
    console.log("Cheat Operation is Successful! NOW we have to win the cheating competition.")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        nosex = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        lwx = results[0].pose.leftWrist.x
        rwx = results[0].pose.rightWrist.x
        dif = Math.abs(rwx - lwx)
    }  
}

function draw() {
    background('blue')
    textSize(dif)
    fill('yellow')
    text('Siddharth', nosex, nosey)  
    document.getElementById("square_side").innerHTML = "Size of name: " + dif + "px"
}