const selectionSortBtn = document.querySelector(".selection-sort");
function swap(el1, el2) {
    if (el1 instanceof Element && el2 instanceof Element) {
        const style1 = window.getComputedStyle(el1);
        const style2 = window.getComputedStyle(el2);

        const transform1 = style1.getPropertyValue("height");
        const transform2 = style2.getPropertyValue("height");

        el1.style.height = transform2;
        el2.style.height = transform1;
    }
}
async function selectionSort(arr, n) {
    const bars = document.querySelectorAll('.bar-class');
    let i, j, min_idx;
    for (i = 0; i < n - 1; i++) {
        min_idx = i;
        bars[min_idx].style.background = "red";

        for (j = i + 1; j < n; j++) {
            bars[j].style.background = "red";
            await sleep(speed);
            bars[j].style.background = "";
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        if (min_idx !== i) {
            swap(bars[i], bars[min_idx]);
            const temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }

        bars[min_idx].style.background = "";
        bars[i].style.background = "green";
    }
    bars[n - 1].style.background = "green";
}
selectionSortBtn.addEventListener("click", async () => {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selectionSort(randomBars, randomBars.length);
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});
