import { Request, Response, NextFunction } from 'express';

// middleware centralizado para atrapar errores de forma global.
// esto limpia nuestros controladores de tener bloques 'catch' repetitivos.
export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('se interceptó un error:', err);
  
  // si el error tiene un código de estado (statuscode) lo respetamos, si no, es un error interno (500).
  const statusCode = err.statusCode || 500;
  const message = err.message || 'error interno del servidor';

  res.status(statusCode).json({ message });
};