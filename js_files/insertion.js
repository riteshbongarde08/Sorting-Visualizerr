const insertionSortBtn = document.querySelector(".insertion-sort");
async function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
}
async function insertionSort(arr, n) {
    const bars = document.querySelectorAll('.bar-class');
    let i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        bars[j].style.background = "red";
        bars[j + 1].style.background = "red";
        await sleep(speed);
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            swap(bars[j], bars[j + 1]);
            await sleep(speed);
            bars[j].style.background = "";
            bars[j + 1].style.background = "";
            j = j - 1;
        }
        arr[j + 1] = key;
        // arr[j + 1] = key;
        for (let k = 0; k <= i; k++) {
            bars[k].style.background = "green";
        }
        await sleep(speed);
    }
    bars[n - 1].style.background = "green";
}
insertionSortBtn.addEventListener("click", async () => {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertionSort(randomBars, randomBars.length);
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});
