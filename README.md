# Reentrega Final Sprint II

## ¿Qué necesitas saber?

1. El script SQL está en **backend/db/database.sql**
2. Las variables de entorno están configuradas y enlazadas para la conexión con la base de datos en backend/src/env/.env
3. Para conectar la base de datos hay que escribir el comando `npm run start` desde grupo11/backend o `npm run dev` desde grupo11/backend/scr
4. Para iniciar el frontend se usa el comando `npm start` desde grupo11/react-frontend.
5. Además de crear una cuenta nueva puedes probar a iniciar sesión con alguno de los usuarios ya registrados en la base de datos. Por ejemplo: terminator@gmail.com - password123

## Objetivos conseguidos para la reentrega
- ***Middleware de seguridad***: implementación en **backend/src/middleware**. Protección de todas las rutas siendo necesario tener un token válido para realizar peticiones de cualquier tipo.
- ***Tests***: en **backend/src/tests**. Programamos varios test para comprobar distintas funcionalidades de las rutas. Para ejecutarlos, desde grupo11/backend escribir `npx mocha src/tests`.
- ***Perfil editable***: división de la tabla original users en **users**, **jobs** y **education** para que sea posible agregar tanto las profesiones como los estudios que el usuario desee. También se pueden añadir dos certificaciones, dos idiomas y dos hobbies.
- ***Feedback en perfil***(solo parcialmente): se envía el mensaje a la base de datos, pero no hemos conseguimos que el feedback enviado apareciera en esa vista de los perfiles.

## No conseguidos
- ***En Posts.js***: que al usuario logueado sólo le aparezcan los posteos de sus amigos. Formamos un código demasiado complejo que hacía que al intentar modificar algo en Posts se rompiera todo.
- ***En Profile.js***: no es posible añadir una foto o centrarla cuando esta no sea cuadrada debido a que no supimos cómo hacerlo al estar alojadas en postimages.org. 
- ***Redux***: falta de tiempo y conocimientos.

## React-frontend

**pages**:

- ***Register.js*** -> Registro de un nuevo usuario y redirecciona a login.
- ***Login.js*** -> Inicio de sesión comparando los datos con los de la base de datos.
- ***Posts.js*** -> Página para posteos de todos los usuarios de la red social. Los posteos se almacenan en la base de datos y se muestran junto con el nombre del usuario, su foto, la fecha de publicación y los 'me gusta' que tenga.
- ***SearchUsers.js*** -> Muestra todas las personas registradas en la red social (excepto el usuario que ha iniciado sesión). Permite **buscar** (component Searchbar) y **agregar** amigos que después aparecen en SearchFriends.js
- ***SearchFriends.js*** -> Muestra los amigos del usuario logueado. Permite **buscar** (component Searchbar) y **eliminar** amigos.
- ***Profile.js*** -> Accesible desde el dropdown de la **navbar** (component NavbarAlt). Fetch desde nuestra API para mostrar los campos que están en la base de datos. El botón de editar cuenta permite modificar campos mediante una petición PATCH.
- ***ProfileUser.js*** -> Perfil no editable de los usuarios no logueados en la red social, accesible haciendo clic sobre el nombre de los usuarios.
-***TicketForm.js*** -> Accesible desde el dropdown de la **navbar**. Permite mandar los datos del formulario a la base de datos.


