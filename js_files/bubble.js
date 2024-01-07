const bubbleSortBtn = document.querySelector(".bubble-sort");
function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
}
async function bblSort(randomBars) {
    const bars = document.querySelectorAll('.bar-class');
    for (var i = 0; i < randomBars.length; i++) {
        for (var j = 0; j < (randomBars.length - i - 1); j++) {
            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";
            await sleep(speed);
            if (randomBars[j] > randomBars[j + 1]) {
                const temp = randomBars[j];
                randomBars[j] = randomBars[j + 1];
                randomBars[j + 1] = temp;
                swap(bars[j], bars[j + 1]);
            }
            bars[j].style.background = "";
            bars[j + 1].style.background = "";
        }
        bars[randomBars.length - i - 1].style.background = "green";
    }
}
bubbleSortBtn.addEventListener("click", async () => {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bblSort(randomBars);
    enableNewArrayBtn();
    enableSortingBtn();
    enableSizeSlider();

});