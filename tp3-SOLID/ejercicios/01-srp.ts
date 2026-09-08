interface User {
  username: string;
  email: string;
}

//clases con responsabilidad unica
//respondabilidad, logica de validacion
class UserValidator {
  isValidEmail(email: string): boolean {
    if (email.includes("@")) {
      return true;
    } else {
      return false;
    }
  }
}

//repositorio
class UserRepository {
  private users: User[] = [];

  register(username: string , email: string): void {
    this.users.push({username, email});
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

  private validator: UserValidator;
  private repository: UserRepository;
  private emailService: EmailService;

constructor() {
    this.validator = new UserValidator();
    this.repository = new UserRepository();
    this.emailService = new EmailService();
  }

  registerUser(username: string, email: string): string {
      //validamos
      if (!this.validator.isValidEmail(email)) {
        throw new Error("El correo no es valido");
      }

      // guardamos
      this.repository.register(username, email);
      
      // enviamos el correo y devolvemos el resultado
      return this.emailService.sendWelcomeEmail(email);
    }
  }

  // instanciamos la clase principal (usa las dependencias por defecto del constructor)
const userRegistration = new UserRegistrationService();
console.log(userRegistration.registerUser("Centu", "agus@email.com"));
