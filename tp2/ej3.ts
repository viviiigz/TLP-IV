// definimos la interfaz Observador para que Equipo dependa de ella
interface Observador {
  actualizar(mensaje: string): void;
}

// la clase soporte actua como observadpr
class Soporte implements Observador {
  public actualizar(mensaje: string): void {
    console.log(`Soporte notificado: ${mensaje}`);
  }
}

// implementamos la clase equipo que permite agregar observadores
class Equipo {
  private observadores: Observador[] = [];
  
  nombre: string;
  tipo: string;
  estado: string;

  constructor(nombre: string, tipo: string, estado: string) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estado;
  }

  // añadir observadores
  public agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  // cambiar el estado y notificar
  public cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }

  // metodo interno para enviar el mensaje a cada observador
  private notificarObservadores(): void {
    const mensaje = `${this.nombre} ha cambiado su estado a ${this.estado}.`;
    for (const observador of this.observadores) {
      observador.actualizar(mensaje);
    }
  }
}

// prueba
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.

//El patrón Observer sirve para que varios objetos (los observadores) estén atentos a los cambios de otro objeto central
//(el observable), sin que el objeto central necesite saber los detalles internos de quién lo está mirando. 
