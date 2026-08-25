class Persona {
  private readonly dni: string;
  nombre: string; 
  
  // nombre distinto para que no choquen con la palabra "edad" y "email" de los gets/sets
  private edadInterna: number = 0;
  private emailInterno: string = "";

  constructor(dni: string, nombre: string, edad: number, email: string) {
    this.dni = dni;
    this.nombre = nombre;

    this.edad = edad; 
    this.email = email;
  }

 
  get edad(): number {
    return this.edadInterna;
  }

  set edad(valor: number) {
    if (valor < 0 || valor > 120) {
      throw new Error("Error: La edad debe estar entre 0 y 120 años.");
    }
    this.edadInterna = valor;
  }

  get email(): string {
    return this.emailInterno;
  }

  set email(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("Error: El email es inválido, debe contener un '@'.");
    }
    this.emailInterno = valor;
  }
//solo lectura
  get esMayorDeEdad(): boolean {
    return this.edadInterna >= 18;
  }

  get datosPublicos(): string {
    const mayorTexto = this.esMayorDeEdad ? "Sí" : "No";
    return `Nombre: ${this.nombre} | Mayor de edad: ${mayorTexto}`;
  }
}


const persona1 = new Persona("40123456", "Laura", 25, "laura@mail.com");

console.log("Datos públicos iniciales:");
console.log(persona1.datosPublicos); // "Nombre: Laura | Mayor de edad: Sí"


persona1.edad = 17;
console.log("\nDespués de cambiar la edad a 17:");
console.log(persona1.datosPublicos); // "Nombre: Laura | Mayor de edad: No"

// Pruebas de errores (Descomenta una por una para ver los errores)
// persona1.edad = 150; 
persona1.email = "correosin-arroba.com";