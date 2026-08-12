
// console.log("esto es TYPESCRIPT");
// const saludo = (nombre: string): string => {
//   return `Hola, ${nombre}!`;
// }
// console.log(saludo("Jose"));

//abstraccion, modelar solo lo que importa al prblema, ignorar el resto

class Producto {
    nombre: string;
    precio: number; 

//union de tipos de datos
    categoria: "Electrónica" | "Almacén" | "Indumentaria" ;
    stock: number;



//el contructores un metodooo que se ejecuta cuando se hace el neww taltal, 
// su trbajo es dejar el objeto en un estad inicial valido

constructor(nombre: string,
     precio:number , 
     categoria: "Electrónica" | "Almacén" | "Indumentaria", 
     stock: number)
      {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock; 

}


//metodos, funcion que pertenece al objeto y que normalmente opera sobre su propio estado
//()significa que reciben o envian datos , : es de tipo, - restale a mi valor aactial 

describir(): string {
    return `${this.nombre} (${this.categoria}): $${this.precio} - ${this.stock} unidades`
}
hayStock(cantidad: number): boolean {
    //devuelve true si el stock actual es mayor o igual a lo q queremos vender
    return this.stock >= cantidad;
}
venderUnidades(cantidad: number) : void{
    if(this.hayStock(cantidad)){
        this.stock -= cantidad ; //se aplixa el desceunto
        console.log(`Venta exitosa. Stock restante de ${this.nombre}: ${this.stock}`)
    }
    else{
        console.log(`No hay suficiente stock: ${cantidad} unidades de ${this.nombre}`)
        // justificacion: elegí un mensaje en consola en lugar de lanzar un Error (throw new Error) 
      // para evitar que el programa se detenga por completo mientras probamos el código
    }
}

}

const producto = new Producto("Mouse Red Dragon", 70000, "Electrónica", 70);
console.log(producto.describir());

