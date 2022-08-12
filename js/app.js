let anoActual = 2022;
let nombre = "";
let edad = 0;
let dni = 0;
let sexo = "";
let peso = 0;
let altura = 0;
let anoNacimiento = 0;

let form = document.getElementById("forms");
form.onclick = function(e){
  e.preventDefault();
}

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anoNacimiento = anoNacimiento;
  }

  mostrarGeneracion() {
    switch (true) {
      case this.anoNacimiento >= 1994 && this.anoNacimiento <= 2010:
        alert(
          "Pertenece a la Generacion Z, su rasgo caracteristico es: Expancion masiva de Internet."
        );
        break;
      case this.anoNacimiento >= 1981 && this.anoNacimiento <= 1993:
        alert(
          "Pertenece a la Generacion Y, su rasgo caracteristico es: Inicio de la digilitacion."
        );
        break;
      case this.anoNacimiento >= 1969 && this.anoNacimiento <= 1980:
        alert(
          "Pertenece a la Generacion X, su rasgo caracteristico es: Crisis del 73 y transicion española."
        );
        break;
      case this.anoNacimiento >= 1949 && this.anoNacimiento <= 1968:
        alert(
          "Pertenece a la Generacion  Baby Boom, su rasgo caracteristico es: Paz y explosion demografica."
        );
        break;
      case this.anoNacimiento >= 1930 && this.anoNacimiento <= 1948:
        alert(
          "Pertenece a la Generacion Silent Generation, su rasgo caracteristico es: Conflictos belicos."
        );
        break;

      default:
        ale("Año ingresado Muy viejo o muy joven jajaja.");
        break;
    }
  }
  esMayorDeEdad() {
    let resta = anoActual - this.anoNacimiento;
    if (resta >= 18) {
      alert("Es mayor de edad");
    } else {
      alert("Es menor de edad");
    }
  }
  mostrarDatos() {
    alert(`
        Nombre: ${this.nombre}
        DNI: ${this.edad}
        DNI: ${this.dni}
        Sexo: ${this.sexo}
        Peso: ${this.peso}
        Altura: ${this.altura}
        Año de Nacimiento: ${this.anoNacimiento}
    `);
  }
}

function crearPersona(){
  nombre = document.getElementById("nombre").value;
  edad = document.getElementById("edad").value;
  dni = document.getElementById("dni").value;
  sexo = document.getElementById("sexo").value;
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;
  anoNacimiento = parseInt(document.getElementById("ano").value);
  let humano = new Persona(nombre, edad, dni, sexo, peso, altura, anoNacimiento);
  return humano;
}

function crearObjeto() {
  let humano = crearPersona();
}

function generacion(){
  let humano = crearPersona();
  humano.mostrarGeneracion(parseInt(humano.anoNacimiento));
}

function mayor(){
  let humano = crearPersona();
  humano.esMayorDeEdad();
}

function datos(){
  let humano = crearPersona();
  humano.mostrarDatos();
}

