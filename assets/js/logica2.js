function sumatoria() {
    let valor_usuario = document.getElementById('numero_sumatoria').value
    let resultado =0 
    for (let i = 0; i <= valor_usuario; i++) {
        resultado = i + resultado
        console.log(resultado)
    
    }
    document.getElementById('resultado').innerHTML = resultado

}


function tablaMultiplicar() {
    let numeroTabla = prompt("Cual es el numero de la tabla?")
    let numeroMaximo = prompt("Hasta donde?")   

    for (let x = 0; x <= numeroMaximo; x++) {
        console.log(numeroTabla*x)
    }
}

function valor() {
    let marlon = document.getElementById("multiplicar").value
    let sebas = document.getElementById("multiplicar1").value
let spanResul = document.getElementById("final")

    for (let x = 0; x <= sebas; x++) {
        console.log(marlon*x)
    spanResul.innerHTML += `${x} X ${marlon} = ${marlon*x} <br>`
    }
}


function dividir() {
    let fraccion= document.getElementById("numero_division").value
    let validacion = 0
    if (fraccion % 2 == 0) {
        let mio = document.getElementById("resultado1")
        mio.innerHTML = "numero" + numero_division + "es par"
    } else {
        alert ("no es numero par")
    }
    //resultado1.value = par 
    }

   // document.getElementById('resultado').innerHTML = resultado


   function genero() {
    let edad = document.getElementById('edad1').value
    let genero = document.getElementById('genero1')
    if (edad <=10) {
        alert ("tome jugo mk")
    }
    else if (edad < 17) {
        alert("no tiene nada")    
    }
    else{  
        if (genero.value === "hombre") {
            alert ("pizza pola")
        }
        else{
            alert ("hawaihana")
        }
    }
   }
   

   function porcentaje1() {
    let promedio = document.getElementById('numero_porcentaje').value
    let costomatricula = 1000000
    let descuento = 0
let total = 0
    if (promedio <= 2.99 ) {
        alert (1000000)
    }
    else if (promedio >= 3 && promedio <= 4) {
        descuento = (costomatricula * 5) / 100
        total = costomatricula-descuento
        alert ("El valor de su matricula es: "+total )
        // promedio.innerHTML = costomatricula
    } else {
        descuento = (costomatricula * 50) / 100
        total = costomatricula-descuento
        alert ("El valor de su matricula es: " + total)
    }
   // document.getElementById('numero_porcentaje').innerHTML = porcentaje1
   document.getElementById('numero_porcentaje').innerHTML = descuento
    }
 



