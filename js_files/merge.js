const mergeSortBtn = document.querySelector(".merge-sort");
async function merge(arr, l, m, r, speed) {
    const bars = document.querySelectorAll('.bar-class');
    let i, j, k;
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = [];
    let R = [];

    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    i = 0;
    j = 0;
    k = l;

    while (i < n1 && j < n2) {
        bars[l + i].style.background = "red";
        bars[m + 1 + j].style.background = "red";
        await sleep(speed);

        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

    for (let idx = l; idx <= r; idx++) {
        bars[idx].style.height = `${arr[idx]}px`;
        bars[idx].style.background = "green";
        await sleep(speed);
    }
}
async function mergeSort(arr, l, r) {
    if (l >= r) return;

    let m = Math.floor(l + (r - l) / 2);

    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);

    await merge(arr, l, m, r);
}
mergeSortBtn.addEventListener("click", async () => {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(randomBars, 0, randomBars.length - 1);
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});
