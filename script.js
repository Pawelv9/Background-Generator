let cssSelector = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let bodyGradient = document.getElementById("gradient");

function setGradient() {
    bodyGradient.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    cssSelector.textContent = `${bodyGradient.style.background};`;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);    