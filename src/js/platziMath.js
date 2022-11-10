const PlatziMath = {}


PlatziMath.calcularPorcentaje = function(arr){

    let sum = 0
    for (const iterator in arr) {
        sum += arr[iterator]
    }

    const average = sum / arr.length

    return average
}

PlatziMath.calcularProcentajeReduce = function(arr){

    let sumList = arr.reduce((valorAcumulado,nuevoValor)=> valorAcumulado + nuevoValor)

    const average =  sumList / arr.length

    return average
}

PlatziMath.calcularDescuento = function(event){
    event.preventDefault()
    const price = Number(inputPrice.value)
    const coupon = inputCoupon.value

    if(!price || !coupon){
        texResult.innerText = `Please complete this form`
        return
    }

    let discount

    const couponSelected = couponsArray.find(function(couponElement){
        return couponElement.name == coupon
    })
    
    if(couponSelected){
        discount = couponSelected.discount
    }else{
        texResult.innerText = `This coupon is not validate`
        return
    }

    const result = (price * (100 - discount)) / 100
        texResult.innerText = `El precio con el ${discount} % de descuento es : ${result}`
}

PlatziMath.esPar = function(arr){
    arr.length % 2 === 0 ? console.log(`La lista es Par`) : console.log(`La lista es Impar`)
}

PlatziMath.calcularMediana = function(arr){
    arr = sortArray(arr)

    let indexMedian = Math.floor(arr.length / 2)
    let indexMedian2 = 0
    let median = 0

    if(esPar(arr)){
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

PlatziMath.ordenarArray = function(arr){
    const sorted = arr.sort(function(valorAcumulado, nuevoValor){
        return valorAcumulado - nuevoValor
    })

    return sorted
}

PlatziMath.sortArrayDosDimensiones = function(arr){
    const sorted = arr.sort(function(valorAcumulado, nuevoValor){
        
        return nuevoValor[1] - valorAcumulado[1]
    })
    return sorted
}

PlatziMath.calcularMedioRango = function(arr){
    const mid_range = (arr[0] + arr[arr.length -1]) / 2

    return `El rango medio de la lista es ${mid_range}`
}

PlatziMath.calcularModa = function(arr){
    let arrCount = {}

    for(element of arr){
        if(arrCount[element]){
            arrCount[element] += 1
        }else{
            arrCount[element] = 1
        }
    }

    let arrCountBi = Object.entries(arrCount)

    sortArrayTwoDimensional(arrCountBi)

    console.log(arrCount) // Array
    console.log(arrCountBi) // Arra two-dimensional

    sortArrayTwoDimensional(arrCountBi)
}



