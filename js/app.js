// variables y selectores
const formulario = document.querySelector('#agregar-gasto')
const gastoListado = document.querySelector('#gastos ul')

// eventos

eventlisteners();
function eventlisteners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}

// clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = +presupuesto
        this.restante = +presupuesto
        this.gastos = []
    }
}

class UI {

}

let presupuesto; // objeto que se instanciará luego


// funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?')
    // console.log(+presupuestoUsuario);
    if(!presupuestoUsuario || isNaN(presupuestoUsuario) || presupuestoUsuario <=0) {
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);
}