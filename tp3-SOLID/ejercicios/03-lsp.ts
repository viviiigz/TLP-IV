abstract class Shape {
  abstract area(): number;
}

class Rectangle extends Shape {
  constructor(protected width: number, protected height: number) {
    super();
  }

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

// un cuadrado solo necesita conocer el tamaño de su lado
class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  setSide(side: number): void {
    this.side = side;
  }

  area(): number {
    return this.side * this.side; 
  }
}


function resizeRectangle(rectangle: Rectangle): void {
  rectangle.setWidth(5);
  rectangle.setHeight(10);
  console.log(`Area esperada: 50. Area obtenida: ${rectangle.area()}`);
}

const miRectangulo = new Rectangle(1, 1);
resizeRectangle(miRectangulo);

const miCuadrado = new Square(5);

console.log(`El area del cuadrado es: ${miCuadrado.area()}`);