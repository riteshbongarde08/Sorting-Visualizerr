const quickSortBtn = document.querySelector(".quick-sort");
async function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const height1 = parseInt(style1.getPropertyValue("height"));
    const height2 = parseInt(style2.getPropertyValue("height"));

    el1.style.height = height2 + 'px';
    el2.style.height = height1 + 'px';

}
async function partition(arr, low, high) {
    const bars = document.querySelectorAll('.bar-class');
    let pivot = parseInt(bars[high].style.height);
    let i = low - 1;

    for (let j = low; j < high; j++) {
        bars[j].style.background = "red";
        await sleep(speed);
        bars[j].style.background = "";

        let barHeight = parseInt(bars[j].style.height);
        if (barHeight < pivot) {
            i++;
            bars[i].style.background = "red";
            await swap(bars[i], bars[j]);
            bars[i].style.background = "";
            await sleep(speed);
        }
    }
    bars[i + 1].style.background = "red";
    await swap(bars[i + 1], bars[high]);
    bars[i + 1].style.background = "green"
    await sleep(speed);
    return i + 1;
}
async function quickSort(arr, low, high) {
    const stack = [];
    stack.push({ low, high });

    while (stack.length) {
        const { low, high } = stack.pop();
        if (low < high) {
            let pivotIndex = await partition(arr, low, high);
            stack.push({ low, high: pivotIndex - 1 });
            stack.push({ low: pivotIndex + 1, high });
        }
    }
    const bars = document.querySelectorAll('.bar-class');
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.background = "green";
        await sleep(speed);
    }
}
quickSortBtn.addEventListener("click", async () => {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(randomBars, 0, randomBars.length - 1);
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});