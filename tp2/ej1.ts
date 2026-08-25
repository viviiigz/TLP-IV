// Definir un tipo o interfaz Equipo (nombre, tipo, estado) para tipar los equipos registrados.
interface Equipo {
  nombre: string;
  tipo: string;
  estado: string; 
}

// Crear una clase Inventario que siga el patrón Singleton.
class Inventario {
  // variable estática privada que guard la única instancia permitida de la clase
  private static instancia: Inventario;
  
  private equipos: Equipo[] = [];

  private constructor() {}

  public static obtenerInstancia(): Inventario {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }

  //método agregarEquipo para añadir equipos
  public agregarEquipo(equipo: Equipo): void {
    this.equipos.push(equipo);
  }

  //método listarEquipos para devolver la lista completa
  public listarEquipos(): Equipo[] {
    return this.equipos;
  }
}

// ejemplo
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo({ nombre: "Notebook Asus", tipo: "Portátil", estado: "disponible" });
inventario.agregarEquipo({ nombre: "Monitor Dell", tipo: "Periférico", estado: "en reparación" });

console.log(inventario.listarEquipos());