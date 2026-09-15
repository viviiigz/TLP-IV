import { EmployeeRepository } from '../repository/employee.repository';

// clase servicio: maneja la lógica de negocio pura.
// no sabe nada de rutas (express) ni de cómo guardar en la base de datos.
export class EmployeeService {
  
  // inyectamos el repositorio a través del constructor.
  // esto cumple con el principio dip (inversión de dependencias).
  constructor(private repository: EmployeeRepository = new EmployeeRepository()) {}

  // método principal para calcular el salario y registrar al empleado.
  async createEmployee(data: { name: string, position: string, baseSalary: number, yearsOfService: number }) {
    
    // aplicamos la regla de negocio estricta del readme:
    // salario final = salario base + 2% del salario base por cada año de antigüedad.
    const bonus = data.baseSalary * 0.02 * data.yearsOfService;
    const finalSalary = data.baseSalary + bonus;

    // armamos el objeto final consolidado.
    const newEmployee = {
      ...data,
      finalSalary
    };

    // delegamos la responsabilidad de guardado al repositorio.
    return await this.repository.create(newEmployee);
  }

  // delega la búsqueda de todos los empleados al repositorio.
  async getAllEmployees() {
    return await this.repository.findAll();
  }

  // delega la búsqueda por id al repositorio.
  async getEmployeeById(id: string) {
    return await this.repository.findById(id);
  }
}