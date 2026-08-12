//herencia: Herencia permite que una clase (subclase/clase hija) reutilice y extienda el comportamiento de 
// otra (superclase/clase base), usando extends.
class Empleado {
    protected nombre: string;
    protected antiguedad: number;


    constructor(nombre: string, antiguedad: number){
        this.nombre = nombre;
        this.antiguedad = antiguedad
    }

calcularSueldo(): number{
    return 0 
}

// este método NO se sobreescribe en subclases
// gracias al polimorfismo, llama al calcularSueldo
//  correspondiente de cada subclase
describir(): string {
    return `${this.nombre} (${this.antiguedad} años) — sueldo: $${this.calcularSueldo()}`;
}

}

//empleado fijo subclase
class EmpleadoFijo extends Empleado {
    private sueldoBase : number;

constructor(nombre:string, antiguedad: number, sueldoBase: number){
    //super ejecuta el constructor de la clase base
    super(nombre, antiguedad);
    this.sueldoBase = sueldoBase;
}

//override
  calcularSueldo(): number {
    //bono del 2 porciento x cada añp de ant
    const bonoAntiguedad = this.sueldoBase * 0.02 * this.antiguedad;
    return this.sueldoBase + bonoAntiguedad;
  }
}

const vivi = new EmpleadoFijo("Viviana", 3, 500000);

console.log(vivi.describir());
