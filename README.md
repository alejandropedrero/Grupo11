# Reentrega Final Sprint I

## ¿Qué necesitas saber?

1. El script SQL está en backend/db/database.sql
2. Las variables de entorno están configuradas y enlazadas para la conexión con la base de datos en backend/src/env/.env
3. Para conectar la base de datos hay que escribir el comando `npm run start` desde grupo11/backend

## Frontend

auth.js:

const checkAuth = () => {
const token = localStorage.getItem("token");
if (!token) {
window.location.href = "../views/login.html";
}
};

Comprueba el Jason Web Token y redirecciona a login.html si se quiere entrar a otra página que no sea Login o Registro si no se ha iniciado sesión.

Desde frontend/views:

- register.html -> Permite registro de un nuevo usuario
- login.html -> Compara los datos en la base de datos para permitir iniciar sesión. Guarda ID del usuario y el JWT en Local Storage
- index.html -> Página para posteos (se accede haciendo click en el logo de Navbar)
- people.html -> Muestra todas las personas registradas en la red social (excepto el usuario que ha iniciado sesión). Permite añadir amigos que después aparecen en friends.html (Amigos en la Navbar). Barra de búsqueda implementada
- friends.html -> Muestra los amigos que el usuario tiene si se han agregado desde people.html (Personas en la Navbar). Barra de búsqueda implementada
- profile.html -> Accesible desde el dropdown de la navbar. Fetch desde nuestra API para mostrar los campos de los que se tienen datos al registrarse. Posteriormente implementaremos la opción de editar campos mediante una petición PATCH.

## API

Desde backend/src:

-

## Notas

- La carpeta 'pendiente' son aspectos que tenemos sin implementar o residuales de los proyectos y grupos anteriores en los que estábamos.
