const scoreElement = document.querySelector("#score");
 
var lastMotionState;
var score = 0;
const threshold = 1000;
 
function handleMotion(event) {
    let acceleration = event.acceleration.x * event.acceleration.x + event.acceleration.y * event.acceleration.y + event.acceleration.z * event.acceleration.z;
    if (acceleration > threshold) {
        if (lastMotionState === undefined) {
            lastMotionState = true;
        } else {
            if (lastMotionState === false) {
                lastMotionState = true;
                score++;
            }
        }
    } else {
        if (lastMotionState === undefined) {
            lastMotionState = false;
        } else {
            if (lastMotionState === true) {
                lastMotionState = false;
                score++;
            }
        }
    }
    scoreElement.innerText = score / 2;
}
 
addEventListener("devicemotion", handleMotion);
