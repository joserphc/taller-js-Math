function calcularMidRange(arr){
    const mid_range = (arr[0] + arr[arr.length -1]) / 2

    return `El rango medio de la lista es ${mid_range}`
}

console.log(calcularMidRange([8,5,4,1,2,6,8,2]))