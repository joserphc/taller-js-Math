function calcularModa(arr){
    let arrCount = {}

    for(element of arr){
        if(arrCount[element]){
            arrCount[element] += 1
        }else{
            arrCount[element] = 1
        }
    }

    let arrCountBi = Object.entries(arrCount) // Crea un array de arrays

    sortArrayTwoDimensional(arrCountBi, 1) // to order two-domensional 

    const mode = arrCountBi[0][0]

    console.log(arrCount) // Array
<<<<<<< HEAD
    console.log(arrCountBi) // Arra two-domensional ordered
    console.log(`'The mode is ${mode}'`)
=======
    console.log(arrCountBi) // Arra two-dimensional
>>>>>>> de62c2e (metódos estáticos)

    sortArrayTwoDimensional(arrCountBi)
}

function sortArrayTwoDimensional(arr, i){
    const sorted = arr.sort(function(valorAcumulado, nuevoValor){
        return nuevoValor[i] - valorAcumulado[i]
    })
    return sorted
}

calcularModa([1,5,4,5,8,6,1,10,8,7,5,10,3,3,2,3,5])
