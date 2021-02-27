// Ejercicios en JS Master 2021

//Ejercicio N° 1
function esParImpar(numero){
    var tipo=(numero%2)? "Es Impar" : "Es Par";
    console.log(tipo);
    return tipo;
}

//Ejercicio N° 2
function posicionEnString(caracter){
    const cadena = "abcdefghijklmnñopqrstuvwxyz";
    if (cadena.includes(caracter)){
        return "La posición en que se encuentra el caracter " + cadena.search(caracter);
    }
    else{
        return "El caracter no se encuentra en el String";
    }

}

//Ejercicio 3
function precioConImpuesto(precio){
    var total = (precio * 19) / 100;
    return "El precio con impuesto es de " + (total + precio);
   

}


//Ejercicio 4
function nuevoDado(nombre){
    
    function numeroAleatorio(){
        var aleatorio = Math.floor(Math.random() * 6) + 1
        return nombre + " tiro un dado y salio " + aleatorio;
    }
    return numeroAleatorio;
    
    
}

//Ejercicio 5
var id = 0;
function Persona(nombreCompleto, edad){
    this.nombreCompleto = nombreCompleto;
    this.edad = edad;
    this.id = id;
    this.guardarEnLocalStorage(this.id);
    this.guardarEnSessionStorage(this.id);
    id++;
    return console.log(this.id);
}

Persona.prototype.guardarEnLocalStorage  = function(id){
        localStorage.setItem("nombreCompleto"+id, this.nombreCompleto);
        localStorage.setItem("edad"+id, this.edad);
        return id;
}

Persona.prototype.guardarEnSessionStorage  = function(id){
    sessionStorage.setItem("nombreCompleto"+id, this.nombreCompleto);
    sessionStorage.setItem("edad"+id, this.edad);
    return id;
}


