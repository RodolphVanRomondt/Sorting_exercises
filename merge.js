function merge(arr1, arr2) {
    let a = 0;
    let b = 0;
    const toReturn = [];

    while (a < arr1.length && b < arr2.length) {
        if (arr1[a] < arr2[b]) {
            toReturn.push(arr1[a]);
            a++;
        } else {
            toReturn.push(arr2[b]);
            b++
        }
    }

    while (a < arr1.length) {
        toReturn.push(arr1[a]);
        a++;
    }

    while (b < arr2.length) {
        toReturn.push(arr2[b]);
        b++
    }

    return toReturn;
}


function mergeSort(arr) {

    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}


module.exports = { merge, mergeSort };