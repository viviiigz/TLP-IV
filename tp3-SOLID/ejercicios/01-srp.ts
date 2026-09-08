interface User {
  username: string;
  email: string;
}

//clases con responsabilidad unica
//respondabilidad, logica de validacion
class UserValidator {
  isValidEmail(email: string) {
    if (!email.includes("@")) {
      throw new Error("Ta mal");
    }
    return false;
  }
}

//repositorio
class UserRepository {
  users: User[] = [];

  save({ username, email }: User) {
    this.users.push({ username, email });
  }
}

//servicio de email
class EmailService {
  sendWelcomeEmail(email: string): string {
    return `Email enviado a ${email}`;
  }
}

//clase coordinadora
class UserRegistrationService {
  constructor(
    public validator: UserValidator = new UserValidator(),
    public repository: UserRepository = new UserRepository(),
    public emailService: EmailService = new EmailService(),
  ) {}

  newUser({ username, email }: User): string {
    //validamos
    this.validator.isValidEmail(email);

    // guardamos
    this.repository.save({ username, email });

    // enviamos el correo y devolvemos el resultado
    return this.emailService.sendWelcomeEmail(email);
  }
}

// instanciamos la clase principal (usa las dependencias por defecto del constructor)
const userRegistration = new UserRegistrationService();
const user = userRegistration.newUser({ email: "vivi@gmail.com", username: "vivi" });
console.log(user)