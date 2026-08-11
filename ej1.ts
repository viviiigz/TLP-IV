
// console.log("esto es TYPESCRIPT");
// const saludo = (nombre: string): string => {
//   return `Hola, ${nombre}!`;
// }
// console.log(saludo("Jose"));

//abstraccion, modelar solo lo que importa al prblema, ignorar el resto

class Producto {
    nombre: string;
    precio: number; 
    categoria: string;
    stock: number;


//el contructores un metodooo que se ejecuta cuando se hace el neww taltal, 
// su trbajo es dejar el objeto en un estad inicial valido

constructor(nombre: string, precio:number , categoria: string, stock: number) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock; 

}
}