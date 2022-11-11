// Análisis personal para Juanita

function buscarPersona(personaABuscar){
    return salarios.find((person)=>{
        return person.name == personaABuscar
    })
}

function medianaPorPersona(nombrePersona){
    const trabajos = buscarPersona(nombrePersona).trabajos

    const salarios = trabajos.map((elemento)=>{
        return elemento.salario
    })

    const medianaSalarios = PlatziMath.calcularMediana(salarios)

    console.log(medianaSalarios)
}

