# API para Realizar Operaciones CRUD en una Base de Datos MySQL Utilizando NodeJS y Express

Una API para la gestión de usuarios que incluye operaciones CRUD utilizando Node.js (Express) y MySQL. La API implementa mecanismos de seguridad mediante la validación de headers en las peticiones http.

## Endpoints de la API

### /users (Realiza peticiones a la BBDD sin los requeridos headers)

- **GET /users**
  Obtiene una lista de todos los usuarios filtrando informacion sensible.


- **GET /users/raw**
  Obtiene una lista de todos los usuarios sin filtrar datos.


- **GET /users/:id**
  Obtiene la información de un usuario por su ID.
  `id` (número): ID del usuario.

- **POST /users**
  Crea un nuevo usuario.
  El body de la petición se emite en formato JSON con los datos del usuario a crear.

- **PUT /users/:id**
  Actualiza la información de un usuario existente por su ID.
  `id` (número): ID del usuario.
  El body de la petición se emite en formato JSON con los datos del usuario a actualizar.

- **DELETE /users/:id**
  Elimina un usuario por su ID.
  `id` (número): ID del usuario.

### /headers (Configura los headers de la petición antes de validarlos)
- **GET /headers**
  Obtiene una lista de todos los usuarios filtrando informacion sensible.


- **GET /headers/raw**
  Obtiene una lista de todos los usuarios sin filtrar datos.


- **GET /headers/:id**
  Obtiene la información de un usuario por su ID.
  `id` (número): ID del usuario.

- **POST /headers**
  Crea un nuevo usuario.
  El body de la petición se emite en formato JSON con los datos del usuario a crear.

- **PUT /headers/:id**
  Actualiza la información de un usuario existente por su ID.
  `id` (número): ID del usuario.
  El body de la petición se emite en formato JSON con los datos del usuario a actualizar.

- **DELETE /headers/:id**
  Elimina un usuario por su ID.
  `id` (número): ID del usuario.



