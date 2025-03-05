# ✅ Task List:
El objetivo de este proyecto académico, es desarrollar una aplicación que permita a los usuarios gestionar eficazmente sus tareas, mejorar la productividad y mantenerse organizados. La aplicación ofrecerá funciones de creación de tareas, priorización, fechas de vencimiento, recordatorios, categorización y seguimiento del progreso.

# 🚀 Features:

## Requerimientos funcionales

## Crear,editar y eliminar tareas     
Los usuarios deben poder añadir fácilmente nuevas tareas a la aplicación.
Las tareas deben tener la opción de incluir un título, una descripción, una fecha de vencimiento, un nivel de prioridad y cualquier etiqueta o categoría relevante.
Los usuarios deben poder editar las tareas existentes para modificar sus detalles, cargar el porcentaje de avance(0, 25, 50, 75 o 100) o marcarlas como completadas.
La aplicación debe permitir a los usuarios eliminar las tareas que ya no sean relevantes.

## Priorización de tareas y fechas de vencimiento
Los usuarios deben poder asignar niveles de prioridad a las tareas (por ejemplo, alta, media, baja).
Las tareas deben tener la opción de definir fechas de vencimiento.

## Categorización y etiquetado de tareas
Los usuarios deben poder organizar las tareas en diferentes categorías (por ejemplo, trabajo, perso# nal, recados).
La aplicación debe permitir a los usuarios añadir etiquetas a las tareas para una organización y búsqueda más detallada.

## Seguimiento del progreso y estadísticas
La aplicación debe ofrecer un listado de las tareas completadas y pendientes.
La aplicación debe ofrecer un listado con estadísticas sobre las tasas de finalización de tareas, el tiempo dedicado a las tareas y otras métricas relevantes.

## Búsqueda y reorganización
La aplicación debe permitir al usuario buscar una tareas por su título o fecha de vencimiento.
La aplicación debe permitir ordenar el listado de tareas por tìtulo, fecha de vencimiento o prioridad.

# 🛠️ Technologias usadas:

* Node
    * Typescript

## Buenas prácticas:
* Patrones de diseño: 
    1. Creacional:
     a. Builder: para poder instancias diferentes tareas de diferentes maneras( distintos tipos de parámetros)
     b. Factory Method: para manejar mejor las abstracciones, encapsular la lógica de creación de objetos, separándola del código del cliente

* Unit testing