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



