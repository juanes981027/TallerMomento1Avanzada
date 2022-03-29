/*
1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices padawan a calcular la distancia a la que cualquiera de los planetas de la ruta N-14 pertenecientes a la ruta comercial de la federación intergaláctica, se encuentra del planeta NABOO.
Para calcular dicha distancia se debe:
• Recibir las coordenadas X,Y del planeta en UA
• Establecer la distancia como:

*/

//  function to calculate

function calcularDistancia(x1,y1,x2,y2){


    return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)).toFixed(2)


}

let distancia = calcularDistancia(0,0,-10,-10)
console.log(distancia)


/*2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de acceso a las naves de guerra los cuáles reposan en la base de datos central, para ello debe programar una función que permita recibir la palabra clave de cada nave y separar imprimiendo solo el nombre del piloto asignado a cada nave.
Tenga en cuenta que el formato de todos los datos es el siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn*/

let datos = ["ARQ2555: Sara Bel-Sun", "ARQ2556: Nodin Chavdri", "ARQ2557: Finn"]


let separarNombre = (array) =>{
    let textoCompleto = []

    array.forEach(function(arr){
    
        let nombre = arr.split(":")[1]
        textoCompleto.push(nombre)
        
    
    })
    console.log(textoCompleto)

}

separarNombre(datos)





/*3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello hay que hacer un monitoreo constante, Cree una función de flecha que permita calcular la temperatura media de la luna a partir de la temperatura máxima y mínima de cada día
 */

let temperaturas = [
    {dia:1, temperaturaMax: 30, temperaturaMin:15},
    {dia:2, temperaturaMax: 45, temperaturaMin:15}
]

let calcularTemperaturaMedia = (temperaturas) =>{
    
    let temperaturaMedia = 0
    temperaturas.forEach(function(temperatura){
        let mediaPorDia = (temperatura.temperaturaMax + temperatura.temperaturaMin)/2
        temperaturaMedia = temperaturaMedia+mediaPorDia/temperaturas.length
        
    })
    return(`La temperatura media de la luna es ${temperaturaMedia}`)
   

}
console.log(calcularTemperaturaMedia(temperaturas))

/* 

4. PROBLEMA: QUI-GON JINN está encargado de revisar un arreglo de 20 sables de luz y contabilizar la cantidad de sables que tienen energías menores a 20 Joules.

Nota: el formato de cada sable es:
cable={
color:v erde,
energía: 50 ,
portafor: Obi Wan
}
*/

let sables = [
    cable={
        color:"verde",
        energía: 50 ,
        portafor: "Obi Wan"
    },
    cable={
        color:"verde",
        energía: 10 ,
        portafor: "Obi Wan"
    },
    cable={
        color:"verde",
        energía: 15 ,
        portafor: "Obi Wan"
    }

]

let cuantosSables = sables.filter(function(sable){
    return(sable.energía<20)
})
console.log(cuantosSables.length)


let minus20Jules = 0
for (i=0;i<sables.length;i++){
    
    if(sables[i].energía<20){
        minus20Jules=minus20Jules+1
    }
    
}
console.log(minus20Jules)
/*

5. PROBLEMA: Watto paga a su personal de ventas un salario de 3500000 mensuales, más una comisión de 1500000 por cada nave vendida, menos el 5% de deducciones aplicada solo a las comisiones. Codifica un programa que calcule e imprima el salario mensual de un vendedor dado;
 */
const salarioBase = 3500000
const comisionNave = 1500000
const deducciones = 0.95
let salarioMensual = (salarioBase,comisionNave,deducciones) =>{
    // let navesVendidas = prompt("Ingrese numero de naves vendidas= ")
    let navesVendidas = 3
    let comisionNaves = navesVendidas*comisionNave

    let salarioTotal = salarioBase+(comisionNaves*deducciones)
    return console.log(`El total de comisiones fueron ${comisionNaves}, y el salario total fue de ${salarioTotal}`)
    
}

salarioMensual(salarioBase,comisionNave,deducciones)


//  ------------------------------------------------------- TALLER 2 ----------------------------------------------------------------


/*
1.PROBLEMA: Yoda el maestro jedí, necesita asignar a sus aprendices padawans 2 actividades dependiendo de la edad de ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años
Inicialmente, se debe programar una función que asocie los datos de: {nombre, planeta, edad y estatura} de 1 padawan a un objeto (10 segundos) y una vez este objeto sea creado se debe llamar a una función secundaria que clasifique y muestre en consola la actividad asignada al padawan*/

let nombres = ["Esteban", "Juan", "Jose", "Daniela", "Luciana"]
let planetas = ["Marte", "Jupiter", "Urano"]
let edades = Math.floor(Math.random()*20)
let estaturas = Math.floor(Math.random()*50+150)
let actividades = ["Manejo de la fuerza", "Manejo del sable de luz"]
let padawans = []


let crearObjetos = (callback) =>{

    

    setTimeout(function(){

        for(let i = 0; i<10;i++){
        
            let padawan = {}

            

            padawan.nombre = nombres[Math.floor(Math.random()*nombres.length)]
            padawan.planeta =  planetas[Math.floor(Math.random()*planetas.length)]
            padawan.edad = Math.floor(Math.random()*10+10)
            padawan.estatura =  Math.floor(Math.random()*50+150)
            
            padawans.push(padawan)
            
            callback(padawan)   
        
        }
        console.log(padawans)
        
    },1000)


}

crearObjetos(function(padawan){
    if(padawan.edad<15){
        padawan.actividad = actividades[0]
    }
    else{
        padawan.actividad = actividades[1]
    }
    
})





/*2.PROBLEMA: Han solo y Chewbacca deben infiltrarse en el planeta yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte, como distractor el imperio ha creado planos falsos y se tiene el dato de que el número de serie de estos planos falsos comienza por encima del número 10; es decir todos los planos falsos tienen números de serie consecutivos comenzando desde el #11. SOLO si se obtiene un plano verdadero Chewbacca y Han pueden abordar su nave y ejecutar un mensajeen consola avisando que han despegado
Configure la rutina necesaria para despegar la nave utilizando callbacks */




let planos = [10,20,4,54,64,36]

let obtenerPlanoReal = (planos, callback) =>{
 
    setTimeout(function(){
        let result = []

        result = planos.filter(function(plano){
            return(plano>1 && plano<10)
        })
        callback(result)
        console.log(result)
    },2000)

    
}

obtenerPlanoReal(planos,function(result){
    if(result.length>0){
        console.log("Puede despegar")

    }
    else{
        console.log("No puede despegar")
    }
})





/*3. PROBLEMA: Grogu ha iniciado su entrenamiento Jedi y debe activar un software que permita clasificar su dieta:
alimento = {
nombre,
tipo (Puede ser vegetal, animal, insecto),
nivel de energía (números entre 100-500)
}
Cree un programa que permita recibir 50 alimentos diferentes y mediante una función primaria después de 5 segundos se pueda obtener solo los alimentos de tipo vegetal que entreguen mas de 200 unidades de energía. Finalmente, una función callback debe permitir entregar la sumatoria de niveles de energía entregados por los alimentos vegetales consumidos en la dieta de Grogu. */

let tipos = ["vegetal","animal","insecto"]
// let nivelDeEnergia = Math.floor(Math.random()*100+400)
// Tuve que colocar names en lugar de nombres por que nombres ya lo tenia declarado mas arriba en otra funcion
let names = ["Veggy","Flesh","Bugs"]

let alimentos = []
let numeroDeAlimentos = 10

// funcion para crear arreglo de alimentos
let crearAlimentos = (numeroDeAlimentos) =>{
     
    
    
    for(i=0;i<numeroDeAlimentos;i++){
        let alimento = {}
        alimento.name = (names[Math.floor(Math.random()*names.length)])
        alimento.tipo = tipos[Math.floor(Math.random()*tipos.length)]
        alimento.nivelDeEnergia = Math.floor(Math.random()*400+100)
        alimentos.push(alimento)
    }

    console.log(alimentos)
    

}

crearAlimentos(numeroDeAlimentos)


let obtenerAlimento = (alimentos,callback) =>{

    setTimeout(()=>{

        let alimentosFiltrados = []
        alimentosFiltrados = alimentos.filter(function(alimento){
            return alimento.tipo == "vegetal" && alimento.nivelDeEnergia>200
        })
        console.log(alimentosFiltrados)
        callback(alimentosFiltrados)

    },5000)
}

obtenerAlimento(alimentos,function(alimentosFiltrados){
    
    let totalCalorias = 0
    alimentosFiltrados.forEach(function(alimentoFiltrado){ 
        totalCalorias = alimentoFiltrado.nivelDeEnergia + totalCalorias
    })
    return console.log(`El total de calorias consumidas por Grogu es de ${totalCalorias}`)

})

