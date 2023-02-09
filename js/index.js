const lights = document.querySelectorAll(".light");
let currentLight = 0;
let intervalId;

function switchLights() {
    lights[currentLight].style.display = "none";
    currentLight = (currentLight + 1) % lights.length;
    lights[currentLight].style.display = "block";
}

document.querySelector("#startBtn").addEventListener("click", function() {
    intervalId = setInterval(switchLights, 1000);
});

document.querySelector("#stopBtn").addEventListener("click", function() {
    clearInterval(intervalId);
});
