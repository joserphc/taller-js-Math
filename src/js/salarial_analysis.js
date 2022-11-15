// Análisis personal para Juanita

function buscarPersona(personaABuscar){
    return salarios.find((person)=>{
        return person.name == personaABuscar
    })
}

// Calcular aumento de salario by Joserph

function calcularAumento(arr){
    const ordenarDescendentemente = arr.sort((a, b)=>{
        return b - a
    })

    const salarioActual = ordenarDescendentemente[0]

    const salarioAnterior = arr.find((elemento)=>{
        return elemento != salarioActual
    })

    const porcentajeAumento = ((salarioActual - salarioAnterior) / salarioAnterior) * 100

    const salarioNuevo = Math.round(salarioActual * (1 + (porcentajeAumento/100)))

    console.log(salarioActual)
    console.log(salarioAnterior)
    console.log(porcentajeAumento)
    console.log(`El nuevo aumento es: ${salarioNuevo}`)
}

// Proyección salarial personal

function proyeccionPorPersona(nombrePersona){
    const trabajos = buscarPersona(nombrePersona).trabajos

    let listaPorcentajes = []

    for (let index = 1; index < trabajos.length; index++) {
        const salarioActual = trabajos[index].salario
        const salarioAnterior = trabajos[index-1].salario
        const crecimiento = salarioActual - salarioAnterior
        const porcentajeCrecimiento = crecimiento / salarioAnterior

        listaPorcentajes.push(porcentajeCrecimiento)
       
    }

    const medianaPorcentajesAumentos = PlatziMath.calcularMediana(listaPorcentajes)

    console.log(medianaPorcentajesAumentos)


    const ultimoSalario = trabajos[trabajos.length - 1].salario
    const aumento = ultimoSalario * medianaPorcentajesAumentos
    const nuevoSalario = ultimoSalario + aumento

    return nuevoSalario
}

function medianaPorPersona(nombrePersona){
    const trabajos = buscarPersona(nombrePersona).trabajos

    const salarios = trabajos.map((elemento)=>{
        return elemento.salario
    })

    const medianaSalarios = PlatziMath.calcularMediana(salarios)

    console.log(salarios)
    console.log(medianaSalarios)
    calcularAumento(salarios)
}

const empresas = {}

for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if(!empresas[trabajo.empresa]){
           empresas[trabajo.empresa] = {}
        }
        
        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = []
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}

console.log({empresas})
// Mí solución
function medianaPorAnnio(name, year){
    const arrayEmpresas = Object.entries(empresas)
    let arrayFinded = []

    arrayEmpresas.forEach(element => {
        let i = 0
        if(element[i] == name){
            return arrayFinded.push(element)
        }
        i++
    })
    let arrayFindedValues = Object.values(arrayFinded[0])
    let arrayFindedAnnio = Object.entries(arrayFindedValues[1])

    let annio = arrayFindedAnnio.find((element)=>{
        let i = 0
        return element[i] == year
    })

    let annioValues = Object.values(annio[1])

    return `La mediana del año ${annio[0]} es: ${PlatziMath.calcularMediana(annioValues)}`
}

console.log(medianaPorAnnio('Freelance', 2019))

// solución del profesor

function medianaEmpresaYear(nombre, year){
    if(!empresas[nombre]){
        console.warn('La empresa no existe')
    }else if(!empresas[nombre][year]){
        console.warn('La empresa no dio salarios ese año')
    }else{
        return PlatziMath.calcularMediana(empresas[nombre][year])
    }
}

// Proyección de salarios por empresas by Joserph

function proyeccionEmpresas(nombre_empresa){
    let empresas_array = Object.entries(empresas[nombre_empresa])
    let sortArray
    let sortArrayYear = []
    let maxMinObject = []

    for (let index = 0; index < empresas_array.length; index++) {
        sortArray = empresas_array[index][1].sort((a,b)=>{
            return a - b 
        })

        sortArrayYear.push(sortArray)
    }

    for (let index = 0; index < sortArrayYear.length; index++) {
        maxMinObject.push([sortArrayYear[index][0],sortArrayYear[index][sortArrayYear[index].length-1]])
    }

    let listaPorcentajes = []

    for (let index = 1; index < maxMinObject.length; index++) {
        const salarioActual =  maxMinObject[index][1]
        const salarioAnterior = maxMinObject[index][0]
        const crecimiento = salarioActual - salarioAnterior
        const porcentajeCrecimiento = crecimiento / salarioAnterior

        listaPorcentajes.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesAumentos = PlatziMath.calcularMediana(listaPorcentajes)

    const ultimoSalario = maxMinObject[maxMinObject.length-1][1]
    const aumento = ultimoSalario * medianaPorcentajesAumentos
    const nuevoSalario = ultimoSalario + aumento

    return Math.floor(nuevoSalario)
}

// solución de proyección por el profesor

function proyeccionPorempresa(nombre){
    if(!empresas[nombre]){
        console.warn('La empresa no existe')
    }else{
        const empresaYears = Object.keys(empresas[nombre])
        const listaMedianaYears = empresaYears.map((year)=>{
            return medianaEmpresaYear(nombre, year)
        })
        let listaPorcentajes = []

        for (let index = 1; index < listaMedianaYears.length; index++) {
            const salarioActual = listaMedianaYears[index]
            const salarioAnterior = listaMedianaYears[index-1]
            const crecimiento = salarioActual - salarioAnterior
            const porcentajeCrecimiento = crecimiento / salarioAnterior
    
            listaPorcentajes.push(porcentajeCrecimiento)
           
        }
    
        const medianaPorcentajesAumentos = PlatziMath.calcularMediana(listaPorcentajes)

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1]
        const aumento = ultimaMediana * medianaPorcentajesAumentos
        const nuevaMediana = ultimaMediana + aumento
    
        return nuevaMediana
    }
}


