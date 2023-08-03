| Solicitud HTTP | Endpoint         | Descripción                 |
| -------------- | ---------------- | --------------------------- |
| GET            | /libros          | Todos los libros           |
| GET            | /libros/id       | Libro por ID               |
| POST           | /libro           | Crear libro                |
| PUT            | /libro/:id       | Actualizar libro por ID    |
| DELETE         | /libro/:id       | Borrar libro por ID        |

Para crear o actualizar elementos, es necesario definir los campos en el body.

Además, en caso de introducir alguna ruta que no esté contemplada en el router, responde con un error 404.
