interface Notifier {
  send(to: string, message: string): void;
}

class EmailSender implements Notifier {
  send(to: string, message: string): void {
    console.log(`Correo para ${to}: ${message}`);
  }
}

class OrderService {
  constructor(private notifier: Notifier) {}

  createOrder(customerEmail: string): void {
    console.log("Pedido creado");
    this.notifier.send(customerEmail, "Tu pedido fue creado");
  }
}

const emailNotifier = new EmailSender();

const orderService = new OrderService(emailNotifier);
orderService.createOrder("ana@example.com");