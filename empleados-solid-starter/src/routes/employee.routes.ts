import { Router } from 'express';
import { EmployeeController } from '../controllers/employee.controller';

const router = Router();
const controller = new EmployeeController();

// definimos los tres endpoints requeridos por la consigna.
// conectamos cada ruta con su método correspondiente en el controlador.
router.post('/employees', controller.create);
router.get('/employees', controller.getAll);
router.get('/employees/:id', controller.getById);

export default router;