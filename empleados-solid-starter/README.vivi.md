# Documentación del Proyecto: Práctica SOLID - Empleados y Salarios

## 1. Implementación de los Principios SOLID

En este proyecto, se tomó un servidor monolítico (donde toda la lógica, rutas y base de datos convivían en un solo archivo `server.ts`) y se refactorizó aplicando una arquitectura por capas. Esta refactorización nos permitió aplicar los siguientes principios SOLID:

### Principio de Responsabilidad Única (SRP)
Según la teoría, cada clase debe tener una única responsabilidad, o una única razón para cambiar.En este proyecto, logramos esto separando el código en capas estrictas:
*   **`models`**: Su única responsabilidad es definir la estructura de los datos del empleado en la base de datos.
*   **`repository`**: Su única responsabilidad es interactuar con MongoDB (guardar y buscar datos). Si mañana cambiamos de base de datos, solo modificamos esta clase.
*   **`services`**: Su única responsabilidad es manejar la lógica de negocio (como el cálculo del salario final = salario base + 2% de antigüedad). No sabe nada de rutas ni de bases de datos.
*   **`controllers`**: Su única responsabilidad es manejar las peticiones HTTP (req, res), validar los datos de entrada y responder al cliente.
*   **`routes`**: Su única responsabilidad es definir los endpoints web de la aplicación.
*   **`errorHandler`**: Centraliza el manejo de excepciones para no ensuciar los controladores.

### Principio de Inversión de Dependencias (DIP)
Este principio establece que las clases deben depender de abstracciones y no de implementaciones concretas[cite: 8]. En el proyecto, aplicamos este concepto (específicamente la inyección de dependencias) a través de los constructores. 
Por ejemplo, nuestro `EmployeeController` no instancia internamente el servicio, sino que lo recibe por constructor. De igual manera, el `EmployeeService` recibe el `EmployeeRepository` por constructor. Esto desacopla las capas y facilita el testeo del código, ya que cada capa desconoce el funcionamiento interno de la capa inferior y solo delega responsabilidades.

---

## 2. Análisis del archivo docker-compose.yml

El proyecto incluye un archivo `docker-compose.yml` que es fundamental para el entorno de desarrollo. 

**¿Cuál es su función?**
La función de Docker Compose es definir y ejecutar aplicaciones Docker de múltiples contenedores. Permite levantar todo el entorno de infraestructura que necesita la aplicación con un solo comando (`docker compose up -d`), sin necesidad de instalar bases de datos de forma local en la computadora del desarrollador.

**¿Qué servicios configura?**
Configura un único servicio llamado `mongodb`.
*   **Imagen:** Utiliza la imagen oficial de MongoDB en su versión 8 (`mongo:8`).
*   **Puertos:** Mapea el puerto `27017` del contenedor al puerto `27017` de la máquina host, permitiendo que nuestra aplicación Node.js se conecte a la base de datos a través de `mongodb://localhost:27017`.
*   **Volúmenes:** Configura un volumen persistente llamado `mongo_data` que se enlaza con el directorio `/data/db` dentro del contenedor. Esto es crucial porque asegura que los datos de los empleados que guardemos no se borren si el contenedor se apaga o se reinicia.

**¿Cómo se relaciona con el funcionamiento general de la aplicación?**
El contenedor de MongoDB actúa como la capa de persistencia de datos (nuestra base de datos real). Nuestra aplicación web en Node.js (que configuramos en `server.ts` y gestionamos mediante Mongoose) depende de este servicio para funcionar. Si el contenedor no está corriendo, la aplicación lanzará un error de conexión al iniciar y no podrá registrar ni listar a los empleados.