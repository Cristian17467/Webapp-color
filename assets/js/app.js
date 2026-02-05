const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

function updateUI(r, g, b) {
    red.value = r;
    green.value = g;
    blue.value = b;

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgbColor;
    rgbText.textContent = rgbColor;

    const hexColor = "#" +
        Number(r).toString(16).padStart(2, "0") +
        Number(g).toString(16).padStart(2, "0") +
        Number(b).toString(16).padStart(2, "0");

    hexText.textContent = hexColor.toUpperCase();
    colorPicker.value = hexColor;
}

function fromSliders() {
    updateUI(red.value, green.value, blue.value);
}

function fromInputs() {
    const r = Math.min(255, Math.max(0, redInput.value));
    const g = Math.min(255, Math.max(0, greenInput.value));
    const b = Math.min(255, Math.max(0, blueInput.value));
    updateUI(r, g, b);
}

function fromColorPicker() {
    const hex = colorPicker.value;
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    updateUI(r, g, b);
}

red.addEventListener("input", fromSliders);
green.addEventListener("input", fromSliders);
blue.addEventListener("input", fromSliders);

redInput.addEventListener("input", fromInputs);
greenInput.addEventListener("input", fromInputs);
blueInput.addEventListener("input", fromInputs);

colorPicker.addEventListener("input", fromColorPicker);
