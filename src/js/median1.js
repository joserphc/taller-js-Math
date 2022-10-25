function isPar(list){
    return !(list.length % 2)
}

function calculateMedian(arr){
    arr = sortArray(arr)

    let indexMedian = Math.floor(arr.length / 2)
    let indexMedian2 = 0
    let median = 0

    if(isPar(arr)){
        indexMedian2 = indexMedian - 1
        const medianPar1 = arr[indexMedian]
        const medianPar2 = arr[indexMedian2]
        const averageMedian = Math.round((medianPar1 + medianPar2) / 2)

        return averageMedian
    }else{
        median = arr[indexMedian]

        return median
    }
}

function sortArray(arr){
    const sorted = arr.sort(function(valorAcumulado, nuevoValor){
        return valorAcumulado - nuevoValor
    })

    return sorted
}

console.log(sortArray([90,10,40,20,58,96,1000,30]))
console.log(calculateMedian([90,10,40,20,58,96,1000,30]))
