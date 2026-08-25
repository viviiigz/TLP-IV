# Sistema de Inventario de Equipos Informáticos 💻

Este proyecto contiene la resolución de una serie de ejercicios prácticos enfocados en la implementación de **Patrones de Diseño** utilizando TypeScript. El objetivo es gestionar un inventario de equipos aplicando buenas prácticas de programación orientada a objetos.

## 🛠️ Patrones de Diseño Implementados

### Ejercicio 1: Patrón Singleton
**Archivo:** `ej1.ts`
*   **Objetivo:** Implementar un patrón Singleton para gestionar un inventario de equipos informáticos[cite: 3].
*   **Descripción:** Garantiza que exista una única instancia del inventario en toda la aplicación, permitiendo registrar y listar equipos con propiedades como nombre, tipo y estado[cite: 3].

### Ejercicio 2: Patrón Factory Method
**Archivo:** `ej2.ts`
*   **Objetivo:** Utilizar el patrón Factory Method para crear diferentes tipos de equipos[cite: 3].
*   **Descripción:** Mediante una fábrica (`EquipoFactory`), el sistema puede instanciar correctamente equipos específicos (Notebook, Desktop, Servidor) de forma dinámica, manteniendo un tipo de retorno uniforme[cite: 3].

### Ejercicio 3: Patrón Observer
**Archivo:** `ej3.ts`
*   **Objetivo:** Utilizar el patrón Observer para notificar a un departamento de soporte cuando un equipo cambia de estado[cite: 3].
*   **Descripción:** Desacopla la lógica de notificaciones. La clase `Equipo` avisa automáticamente a cualquier `Observador` suscrito (como el departamento de soporte) cada vez que ocurre un cambio en su estado interno[cite: 3].

### Ejercicio 4: Patrón Adapter (Adaptador)
**Archivo:** `ej4.ts`
*   **Objetivo:** Implementar el patrón Adaptador para integrar una clase antigua de inventario con el nuevo sistema[cite: 3].
*   **Descripción:** Utiliza un adaptador (`AdaptadorInventario`) para envolver una clase heredada (`InventarioViejo`). Esto permite que el sistema nuevo interactúe con el código antiguo usando las interfaces modernas, traduciendo las llamadas internamente sin romper el código original[cite: 3].

---

## 🚀 Cómo ejecutar los ejercicios

Este proyecto utiliza características nativas de versiones recientes de Node.js que permiten ejecutar archivos TypeScript de forma directa.


**Pasos para la ejecución:**
1. Abre tu terminal.
2. Navega hasta la carpeta donde se encuentran los archivos.
3. Ejecuta cada archivo individualmente utilizando el comando `node` seguido del nombre del archivo. Por ejemplo:

``` bash
# Para ejecutar el Ejercicio 1 (Singleton)
node ej1.ts

# Para ejecutar el Ejercicio 2 (Factory Method)
node ej2.ts

# Para ejecutar el Ejercicio 3 (Observer)
node ej3.ts

# Para ejecutar el Ejercicio 4 (Adapter)
node ej4.ts
```
---

#### ⚠️ Nota importante sobre TypeScript: Error de nombres duplicados (Scope Global)

Durante el desarrollo de estos ejercicios, es posible que el editor de código marque algunas variables, clases o interfaces con una línea roja de error (por ejemplo, el error `ts(2345)` con el nombre `Equipo`). 

**¿Por qué sucede esto?**
Por defecto, TypeScript considera que todos los archivos `.ts` dentro de una misma carpeta comparten un **mismo entorno global** (scope). 
* En el **Ejercicio 1** definimos un `Equipo` como una interfaz sencilla[cite: 3]. 
* En el **Ejercicio 3** definimos `Equipo` como una clase más compleja con métodos como `agregarObservador`[cite: 3]. 

Al estar en la misma carpeta, TypeScript intenta fusionarlos, sobreescribiendo y sobrecargando el nombre de la implementación. El programa se confunde y exige que el objeto del Ejercicio 1 tenga los métodos del Ejercicio 3.

**¿Cómo lo solucionamos?**
Para indicarle a TypeScript que cada archivo es independiente y aislar su contenido, agregamos la siguiente línea al final de los archivos que presentan este choque:

```typescript
export {};

**sin embargo yo lo dejé asi porque no me afectaba el funcionamiento.**