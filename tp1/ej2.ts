//encapsulamiento: el objeto protege su propio estado. nadie de afuera lo modifica

class CuentaBancaria {
    readonly titular: string; //se usa readonly para que se fije el objeto y no se pueda reasignar el titualr
    private saldo : number; // arranca en el monto iniial que se le pase por constructor
    private historial: string[]; //arreglo interno a registre cada deposito y retiro 


    constructor(titular:string, montoInicial: number){
        this.titular = titular;
        this.saldo = montoInicial;
        this.historial = [`Saldo inicial: $${montoInicial}`]
    }

    //metodos controlados tema monto

depositar(monto:number): void {
    if (monto <= 0) {
        throw new Error("El monto que quiere depositar debe ser mayor a 0");
    } 
    this.saldo += monto;
    this.historial.push(`Depósito: $${monto}`);
}
retirar(monto:number): void {
    if (monto > this.saldo) {
        throw new Error("No tiene el fondo sificiente")
    }
    if (monto <= 0 ){
        throw new Error("El monto a retirar debe ser mayor a 0");
        
    }
this.saldo -= monto;
this.historial.push(`Retiro: -$${monto}`)
}
// Un getter/setter tiene sentido cuando agrega valor 
// real — validación, cálculo derivado, o control de quién puede leer/escribir:
  consultarSaldo(): number {
    return this.saldo; 
  }

  obtenerHistorial(): string[] {
  // si devolvemos el this.historial, devolvemos el arreglo original y seria modificable
    // Usamos spread operator para devolver una FOTOCOPIA exacta del arreglo
    return [...this.historial];

  }}

const miCuenta = new CuentaBancaria("Viviana", 100000);

//depositar y retirar
miCuenta.depositar(50);
miCuenta.retirar(1000);

console.log(`Titular: ${miCuenta.titular}`)
console.log(`Saldo actual: $${miCuenta.consultarSaldo()}`);
console.log("Historial de movimientos:");
console.log(miCuenta.obtenerHistorial());

