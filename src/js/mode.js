function calcularModa(arr){
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
    console.log(arrCountBi) // Arra two-domensional

    sortArrayTwoDimensional(arrCountBi)
}

function sortArrayTwoDimensional(arr){
    const sorted = arr.sort(function(valorAcumulado, nuevoValor){
        
        return nuevoValor[1] - valorAcumulado[1]
    })
    return sorted
}

calcularModa([1,5,4,5,8,6,1,10,8,7,5,10,3,3,2,3,5])
