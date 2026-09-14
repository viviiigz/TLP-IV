interface PaymentMethod {
  pay(amount: number): void;
}

class CardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} con tarjeta`);
  }
}

class CashPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} en efectivo`);
  }
}

class PaymentProcessor {
  // ahora el procesador no usa switch, simplemente recibe un objeto 
  // que cumpla con la interfaz
  process(paymentMethod: PaymentMethod, amount: number): void {
    paymentMethod.pay(amount);
  }
}

const processor = new PaymentProcessor();

processor.process(new CardPayment(), 100);
processor.process(new CashPayment(), 50);