import { Employee, IEmployee } from '../models/Employee';

// clase repositorio: se encarga exclusivamente de interactuar con mongodb.
// aislar la persistencia de datos nos ayuda a cumplir el principio srp.
export class EmployeeRepository {
  
  // guarda un empleado nuevo en la base de datos.
  async create(employeeData: Partial<IEmployee>): Promise<IEmployee> {
    return await Employee.create(employeeData);
  }

  // trae todos los empleados ordenados por fecha de creación descendente.
  async findAll(): Promise<IEmployee[]> {
    return await Employee.find().sort({ createdAt: -1 });
  }

  // busca un empleado específico usando su id.
  async findById(id: string): Promise<IEmployee | null> {
    return await Employee.findById(id);
  }
}