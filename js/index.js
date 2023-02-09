const lights = document.querySelectorAll(".light");
let currentLight = 0;

function switchLights() {
    lights[currentLight].style.display = "none";
    currentLight = (currentLight + 1) % lights.length;
    lights[currentLight].style.display = "block";
}

setInterval(switchLights, 1000);