
interface Equipo {
  nombre: string;
  tipo: string;
  estado: string;
}

// clase InventarioViejo que tiene un metodo agregarItem
class InventarioViejo {
  private items: Equipo[] = [];

  public agregarItem(item: Equipo): void {
    this.items.push(item);
  }

  public obtenerItems(): Equipo[] {
    return this.items;
  }
}


// definimos explícitamente la interfaz Inventario 
// lo ajustamos para que reciba 3 strings 
interface Inventario {
  agregarEquipo(nombre: string, tipo: string, estado: string): void;
  listarEquipos(): Equipo[];
}

// implementamos la clase AdaptadorInventario que implementa esa interfaz
class AdaptadorInventario implements Inventario {
  private inventarioViejo: InventarioViejo;

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }

  // permite utilizar InventarioViejo traduciendo las llamadas internamente
  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    // Empaquetamos los 3 strings en un objeto para dárselo al sistema viejo
    const nuevoEquipo = { nombre, tipo, estado };
    this.inventarioViejo.agregarItem(nuevoEquipo);
  }

  public listarEquipos(): Equipo[] {
    return this.inventarioViejo.obtenerItems();
  }
}

//prueba

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]

