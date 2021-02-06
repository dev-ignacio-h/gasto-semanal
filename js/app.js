// variables y selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

// eventos

eventlisteners();
function eventlisteners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
}

// clases
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = +presupuesto;
    this.restante = +presupuesto;
    this.gastos = [];
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    // Se extrae el valor
    const { presupuesto, restante } = cantidad;
    // Se agrega al html
    document.querySelector('#total').textContent = presupuesto;
    document.querySelector('#restante').textContent = restante;
  }
}

// Instanciar
const ui = new UI();
let presupuesto; // objeto que se instanciará luego

// funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cuál es tu presupuesto?");
  // console.log(+presupuestoUsuario);
  if (
    !presupuestoUsuario ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }

  // Presupuesto valido
  presupuesto = new Presupuesto(presupuestoUsuario);

  ui.insertarPresupuesto(presupuesto);
}
