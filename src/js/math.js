console.group('Cuadrado')

const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado * 4
const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
})

function calcularCuadrado(lado){
    return {
        perimetro: lado * 4,
        area: area * area
    }
}

console.groupEnd('Cuadrado')

console.group('Triangulo')

const ladoTriangulo1 = 5
const ladoTriangulo2 = 5
const baseTriangulo = 10
const alturaTriangulo = 8

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

function calcularCuadrado(lado1, lado2, base, altura){
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) /2
    }
}

function calcularTrianguloIsoceles(ladosEquivalentes, base){
    if(ladosEquivalentes == base){
        console.warn('No es un triángulo isocéles')
    }else{
        return Math.sqrt((ladosEquivalentes**2)-((base**2)/4))
    }
}

function calcularTrianguloEscaleno(lado1,lado2,base){
    if(lado1 == lado2){
        console.warn('No es un triangulo escaleno')
    }else{
        const semiperimetro = (lado1 + lado2 + base) / 2
        return (2 / base) * Math.sqrt(semiperimetro*(semiperimetro-lado1)*(semiperimetro-lado2)*(semiperimetro-base))
    }
    
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    baseTriangulo,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
})

console.groupEnd('Triangulo')

console.group('Circle')

const radioCirculo = 3
const diametroCirculo = radioCirculo * 2
const circunferenciaCirculo = radioCirculo * Math.PI
const areaCirculo = Math.pow(radioCirculo,2).toFixed(3)

console.log({
    radioCirculo,
    diametroCirculo,
    circunferenciaCirculo,
    areaCirculo,
})

function calcularCirculo(radio){
    const diametro = radio * 2
    const circunferencia = radio * Math.PI
    const area = Math.pow(radio,2).toFixed(2)
    return {
        diametro,
        circunferencia,
        area,
    }
}

console.groupEnd('Circle')