function calculateAverage(arr){

    let sum = 0
    for (const iterator in arr) {
        sum += arr[iterator]
    }

    const average = sum / arr.length

    return average
}

console.log(calculateAverage([15,20,36,47,54,12,20,25,29,34,35,31,30,30,15,14,12,12,16,15,18,18,19,57,]))

// 24
// 614
// 25.58333333333333