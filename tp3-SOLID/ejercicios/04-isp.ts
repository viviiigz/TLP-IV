//partimos la interfaz en interfaces chicas
interface Printer {
  print(document: string): void;
}

interface Scanner {
  scan(document: string): void;
}

interface Fax {
  fax(document: string): void;
}

// simplePrinter implementa SOLO printer sin metodos que lancen errores
class SimplePrinter implements Printer {
  print(document: string): void {
    console.log(`Imprimiendo: ${document}`);
  }
}

const miImpresora = new SimplePrinter();
miImpresora.print("tarea.txt");