class Empleado {
  protected nombre: string;
  protected antiguedad: number;

  constructor(nombre: string, antiguedad: number) {
    this.nombre = nombre;
    this.antiguedad = antiguedad;
  }

  // método que será sobre escrito
  calcularSueldo(): number {
    return 0;
  }

  // wste método muestra q al llamar a this.calcularSueldo,
  // ts sabrá ejecutar la versión correcta dependiendo del tipo de empleado
  describir(): string {
    return `${this.nombre} (${this.antiguedad} años) — sueldo: $${this.calcularSueldo()}`;
  }
}

// sublse2 empleadofijo
class EmpleadoFijo extends Empleado {
  private sueldoBase: number;

  constructor(nombre: string, antiguedad: number, sueldoBase: number) {
    super(nombre, antiguedad);
    this.sueldoBase = sueldoBase;
  }

  calcularSueldo(): number {
    const bono = this.sueldoBase * 0.02 * this.antiguedad;
    return this.sueldoBase + bono;
  }
}

// subclase 2 empleadoxhoras
class EmpleadoPorHoras extends Empleado {
  private horasTrabajadas: number;
  private valorHora: number;

  constructor(nombre: string, antiguedad: number, horasTrabajadas: number, valorHora: number) {
    super(nombre, antiguedad); 
    this.horasTrabajadas = horasTrabajadas;
    this.valorHora = valorHora;
  }

  // sobreescribe calcularSueldo con su propia regla q es la de horas x valor
  calcularSueldo(): number {
    return this.horasTrabajadas * this.valorHora;
  }
}

// subclase 3 empleado x comision
class EmpleadoPorComision extends Empleado {
  private ventasDelMes: number;
  private porcentajeComision: number;

  constructor(nombre: string, antiguedad: number, ventasDelMes: number, porcentajeComision: number) {
    super(nombre, antiguedad);
    this.ventasDelMes = ventasDelMes;
    //porcentaje como un decimal para facilitar el calculo 10% = 0.10
    this.porcentajeComision = porcentajeComision / 100; 
  }

  // sobrescribe calcularSueldo con su propia regla q es ventas por porcentaje
  calcularSueldo(): number {
    return this.ventasDelMes * this.porcentajeComision;
  }
}


// arreglo donde todos los elementos son tratados como empleado (la clase base)
// no necesita saber si son fijos, por horas o por comision
function calcularNomina(empleados: Empleado[]): number {
  let totalNomina = 0;
  
  // recorremos el arreglo sumando el sueldo de cada uno
  for (const empleado of empleados) {
    totalNomina += empleado.calcularSueldo(); 
  }
  
  return totalNomina;
}


// Creamos instancias mezcladas
const ana = new EmpleadoFijo("Ana (Fija)", 5, 600000); 
const carlos = new EmpleadoPorHoras("Carlos (Horas)", 2, 160, 2500); 
const luisa = new EmpleadoPorComision("Luisa (Comisión)", 1, 5000000, 10); 

//genericamente empleadaos
const listaEmpleados: Empleado[] = [ana, carlos, luisa];

console.log("Detalle de Sueldos");
for (const emp of listaEmpleados) {
  console.log(emp.describir()); 
}

console.log("Cálculo de Nómina Total");
//función independiente
const nominaTotal = calcularNomina(listaEmpleados);
console.log(`El total a pagar en sueldos este mes es: $${nominaTotal}`);