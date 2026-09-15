import { Request, Response, NextFunction } from 'express';
import { EmployeeService } from '../services/employee.service';

// clase controlador su responsabilidad es recibir peticiones http y enviar respuestas
export class EmployeeController {
  
  // inyectamos nuestro servicio de logica de negocio.
  constructor(private service: EmployeeService = new EmployeeService()) {}

  // usamos arrow functions para no perder el contexto de 'this' en las rutas.
  // maneja el endpoint post /employees.
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, position, baseSalary, yearsOfService } = req.body;

      // validaciones básicas de la carga útil (payload).
      if (!name || !position) {
        return res.status(400).json({ message: 'nombre y puesto son obligatorios' });
      }
      if (typeof baseSalary !== 'number' || baseSalary <= 0) {
        return res.status(400).json({ message: 'el salario base debe ser mayor a 0' });
      }
      if (typeof yearsOfService !== 'number' || yearsOfService < 0 || !Number.isInteger(yearsOfService)) {
        return res.status(400).json({ message: 'la antigüedad debe ser un entero mayor o igual a 0' });
      }

      // pasamos los datos limpios al servicio para que haga los cálculos.
      const employee = await this.service.createEmployee({ name, position, baseSalary, yearsOfService });
      
      console.log(`empleado creado: ${employee.name} - salario final: ${employee.finalSalary}`);
      res.status(201).json(employee);
    } catch (error) {
      // si algo falla, lo pasamos al middleware de errores.
      next(error);
    }
  };

  // maneja el endpoint get /employees.
  getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const employees = await this.service.getAllEmployees();
      res.json(employees);
    } catch (error) {
      next(error);
    }
  };

// usamos genéricos de typescript para definir la forma de req.params
  getById = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const employee = await this.service.getEmployeeById(req.params.id);
      
      if (!employee) {
        return res.status(404).json({ message: 'empleado no encontrado' });
      }
      res.json(employee);
    } catch (error) {
      next(error);
    }
  };
}