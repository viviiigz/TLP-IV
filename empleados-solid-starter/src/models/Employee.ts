import { Schema, model, Document } from 'mongoose';

// definimos la interfaz para tener tipado fuerte en typescript
// esto nos ayuda a que el editor nos avise si nos olvidamos de alguna propiedad.
export interface IEmployee extends Document {
  name: string;
  position: string;
  baseSalary: number;
  yearsOfService: number;
  finalSalary: number;
}

// creamos el esquema de mongoose para la base de datos de mongo.
// es nuestra única fuente de verdad sobre cómo luce un empleado.
const employeeSchema = new Schema<IEmployee>(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    baseSalary: { type: Number, required: true },
    yearsOfService: { type: Number, required: true },
    finalSalary: { type: Number, required: true }
  },
  { timestamps: true } // agrega createdAt y updatedAt automáticamente
);

// exportamos el modelo para que el repositorio pueda usarlo.
export const Employee = model<IEmployee>('Employee', employeeSchema);