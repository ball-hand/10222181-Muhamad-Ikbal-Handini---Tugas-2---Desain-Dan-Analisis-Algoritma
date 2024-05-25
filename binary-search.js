console.log(" Test coding aman bo lanjut code code ")


// Contoh Kasus:
// Terdapat sekumpulan data dengan nilai sebagai berikut.
// [5, 2, 9, 15, 0, 6, 10]
// Lakukanlah proses pencarian Data yang bernilai 15 dengan menggunakan metode Binary Searching.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Mengembalikan indeks jika nilai ditemukan
        } else if (arr[mid] < target) {
            left = mid + 1; // Cari di bagian kanan
        } else {
            right = mid - 1; // Cari di bagian kiri
        }
    }

    return -1; // Mengembalikan -1 jika nilai tidak ditemukan
}

const data = [5, 2, 9, 15, 0, 6, 10];
const targetValue = 15;

const index = binarySearch(data, targetValue);

if (index !== -1) {
    console.log(`Nilai ${targetValue} ditemukan pada indeks ke-${index}.`);
} else {
    console.log(`Nilai ${targetValue} tidak ditemukan dalam array.`);
}



