abstract class EquipoBase {
  nombre: string;
  ram: string;
  procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    this.nombre = nombre;
    this.ram = ram;
    this.procesador = procesador;
  }

  abstract detalles(): string;
}
// al marcar el metodo como abstracto,
//  OBLIGAMOS a que cualquier clase que herede (como Notebook o Desktop) tenga que escribir su propia versión de este método.

// clases específicas
class Notebook extends EquipoBase {
  detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Desktop extends EquipoBase {
  detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor extends EquipoBase {
  detalles(): string {
    return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}
// 'extends' aplica la herencia. Notebook hereda las propiedades (nombre, ram, procesador) de la clase EquipoBase.

class EquipoFactory {
  public crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): EquipoBase {
    if (tipo === "Notebook") {
      return new Notebook(nombre, ram, procesador);
    } else if (tipo === "Desktop") {
      return new Desktop(nombre, ram, procesador);
    } else if (tipo === "Servidor") {
      return new Servidor(nombre, ram, procesador);
    }
    
    throw new Error("Tipo de equipo no reconocido.");
  }
}

//prueba
const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");

console.log(notebook.detalles());
// Salida: Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7