let barsContainer = document.getElementById("bars");
let barSize = document.querySelector("#bar-size");
let newArrayBtn = document.querySelector(".new-array-btn");
const speedInput = document.querySelector("#speed");
let randomBars = [];
function disableSortingBtn() {
    document.querySelector(".bubble-sort").disabled = true;
    document.querySelector(".insertion-sort").disabled = true;
    document.querySelector(".merge-sort").disabled = true;
    document.querySelector(".quick-sort").disabled = true;
    document.querySelector(".selection-sort").disabled = true;
}


function enableSortingBtn() {
    document.querySelector(".bubble-sort").disabled = false;
    document.querySelector(".insertion-sort").disabled = false;
    document.querySelector(".merge-sort").disabled = false;
    document.querySelector(".quick-sort").disabled = false;
    document.querySelector(".selection-sort").disabled = false;
}

function disableSizeSlider() {
    document.querySelector("#bar-size").disabled = true;
}

function enableSizeSlider() {
    document.querySelector("#bar-size").disabled = false;
}

function disableNewArrayBtn() {
    document.querySelector(".new-array-btn").disabled = true;
}

function enableNewArrayBtn() {
    document.querySelector(".new-array-btn").disabled = false;
}

function generateBars(container, numOfBars) {
    container.innerHTML = '';
    randomBars = [];
    for (let i = 0; i < numOfBars; i++) {
        let randomNumber = Math.floor(Math.random() * 450) + 20;
        let newDiv = document.createElement("div");
        newDiv.style.height = `${randomNumber}px`;
        newDiv.classList.add("bar-class");
        container.appendChild(newDiv);
        randomBars.push(randomNumber);
    }

    return randomBars;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    // return new Promise(resolve => {
    //     setTimeout(() => { resolve('') }, ms);
    // })
}
barSize.addEventListener("input", () => {
    let numOfBars = parseInt(barSize.value);
    generateBars(barsContainer, numOfBars);
});

newArrayBtn.addEventListener("click", () => {
    let numOfBars = parseInt(barSize.value);
    generateBars(barsContainer, numOfBars);
});

let speed = 260; //parseInt(speedInput.value);

speedInput.addEventListener("input", () => {
    // console.log("new delay " + speed);
    speed = 320 - parseInt(speedInput.value);
});
generateBars(barsContainer, parseInt(barSize.value));