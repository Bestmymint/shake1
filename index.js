let ig = document.querySelector("#ig")
let aa = document.querySelector("#aa")
let bb = document.querySelector("#bb")
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
    profile()
    scoreElement.innerText = score / 2;
}
function profile(){
    if( score >= 10){
        ig.classList.remove("hidden")
    }
    if(score >= 20){
        aa.classList.remove("hiddenn")
    }
    if( score >= 25)[
        window.location.href="https://bestory-s.web.app"
    ]

}
 
addEventListener("devicemotion", handleMotion);

function requestPerm(event) {
    DeviceMotionEvent.requestPermission()
        .then(response => {
            console.log(response);
        }
        )
}

requestPermBtn.addEventListener("click", requestPerm);
addEventListener("devicemotion", handleMotion);

