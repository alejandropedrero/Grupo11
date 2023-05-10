# Reentrega Final Sprint I

## ¿Qué necesitas saber?

1. El script SQL está en **backend/db/database.sql**
2. Las variables de entorno están configuradas y enlazadas para la conexión con la base de datos en backend/src/env/.env
3. Para conectar la base de datos hay que escribir el comando `npm run start` desde grupo11/backend
4. Además de crear una cuenta nueva puedes probar a iniciar sesión con alguno de los usuarios ya registrados en la base de datos ya que tienen imágenes que se muestran en distintas páginas de la aplicación. Por ejemplo: bueno.g.sonia@gmail.com - password123

## Frontend

**auth.js**:

```
const checkAuth = () => {
const token = localStorage.getItem("token");
if (!token) {
window.location.href = "../views/login.html";
}
};
```
Comprueba el **Jason Web Token** y redirecciona a login.html si se quiere entrar a otra página que no sea Login o Registro si no se ha iniciado sesión.

Desde **frontend/views**:

- ***register.html*** -> Permite registro de un nuevo usuario
- ***login.html*** -> Compara los datos en la base de datos para permitir iniciar sesión. Guarda ID del usuario y el JWT en Local Storage
- ***index.html*** -> Página para posteos. Los posteos se almacenan en la base de datos y se muestra fecha. Nos queda pendiente mostrar todos los posts existentes en la página.
- ***people.html*** -> Muestra todas las personas registradas en la red social (excepto el usuario que ha iniciado sesión). Permite añadir amigos que después aparecen en friends.html (Amigos en la Navbar). Barra de búsqueda implementada
- ***friends.html*** -> Muestra los amigos que el usuario tiene si se han agregado desde people.html (Personas en la Navbar). Barra de búsqueda implementada
- ***profile.html*** -> Accesible desde el dropdown de la navbar. Fetch desde nuestra API para mostrar los campos de los que se tienen datos al registrarse. El botón de editar cuenta permite modificar campos mediante una petición PATCH y redirige a edit-profile.html.
- ***edit-profile.html*** -> Permite modificar el nombre y el e-mail del usuario.

## Notas

- La carpeta 'pendiente' son aspectos que tenemos sin implementar o residuales de los proyectos y grupos anteriores en los que estábamos.
