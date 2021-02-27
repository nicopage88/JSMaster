//Ejercicio 1
var tareados = {
    "mascotas": ['perros', 'gatos', 'canarios', 'pez', 'serpiente'],

    eliminarMascota: function(mascota) {
        tareados.mascotas = tareados.mascotas.filter(e => e !== mascota);
        return tareados.mascotas;
    },

    eliminarUltimaMascota: function() {
        tareados.mascotas.pop();
        return tareados.mascotas;
    },

    agregarMascota: function(mascota) {
        tareados.mascotas.push(mascota);
        return tareados.mascotas;
    },

    contadorMascotas: function() {
        var counter = 0;

        for (i=0;i < tareados.mascotas.length; i++) {

            if (tareados.mascotas[i].slice(-2) === "os") {
                counter+=1;
            } else {
                continue;
            }
        }

        return "En el arreglo hay "+counter+ " mascotas que terminan con 'os'";
    } 
};


//Ejercicio 2


const trabajador = {
  nombre: 'Jhon Smith',
  cargo: 'QA',
  empresa: {
      ubicacion: {
          comuna: 'Santiago',
          puesto: 'nº 24',
      },
      datos: {
        nombreEmpresa: 'ACME', 
      },
      clientes: ['Facebook', 'Google'],
  },
  gustos: ['comer', 'ver televisión', 'dormir'],
  hijos: undefined, 
}

const {
  nombre,
  cargo,
  empresa : {
    ubicacion:{
      comuna,
      puesto,
    },      
    datos: {
      nombreEmpresa
    },
    clientes : [primerElemento1,segundoElemento]
  },
  gustos : [primerElemento2 , ...resto],
  hijos: mihijo="no tiene hijos"
}= trabajador

const alerta = () => {

  alert(`El trabajador ${nombre} trabaja en ${nombreEmpresa} con cargo ${cargo} y le gusta ${primerElemento2} y ${resto} más, ${mihijo}`)
  alert(`El trabajador ${nombre} va a su trabajo en ${comuna} , es ${cargo} , en el puesto ${puesto}, trabaja con ${primerElemento1}, ${segundoElemento}`)
  console.log(`El trabajador ${nombre} trabaja en ${nombreEmpresa} con cargo ${cargo} y le gusta ${primerElemento2} y ${resto} más, ${mihijo}`); 
  console.log(`El trabajador ${nombre} va a su trabajo en ${comuna} , es ${cargo} , en el puesto ${puesto}, trabaja con ${primerElemento1}, ${segundoElemento}`);
  //
}