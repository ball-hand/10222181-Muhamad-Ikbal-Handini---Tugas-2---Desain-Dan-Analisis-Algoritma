function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

const data = [5, 2, 9, 15, 0, 6, 10];
const sortedData = insertionSort(data);
console.log("Array setelah diurutkan dengan Insertion Sort:", sortedData);
