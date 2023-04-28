# Entrega Final Sprint I

Para esta entrega se ha incorporado código del desaparecido grupo 9 con el fin de tener el mejor punto de partida como grupo 11. Incorporaciones:

- Implementadas nuevas publicaciones en página index + aplicado estilo correspondiente de grupo 11
- Implementado borrado de datos de perfil al Eliminar cuenta + Confirm

## ¿Qué necesitas saber?

1. El script SQL está en backend/db/database.sql
2. Las variables de entorno están configuradas y enlazadas para la conexión con la base de datos en backend/src/env
3. Para iniciar hay que escribir el comando `npm run start` desde cd backend


## Endpoints

Los endpoints que están operativos son:

- Index
- People
- Register
- Login
- Profile
- Users, que devuelve un JSON con los datos de los usuarios.

## API local

Cambio del uso de la API "Random User generator" por nuestra API, que aplicamos en people.ejs

```
fetch("http://localhost:3000/users/")
  .then((response) => response.json())
  .then((data) => {
    // Extract the required information from the API response
    const people = data.map((result) => ({
      name: result.name,
      email: result.email,
    }));

    console.log(people);

    // Update the HTML elements with the extracted information
    people.forEach((person, index) => {
      nameElements[index].textContent = person.name;
      emailElements[index].textContent = person.email;
    });
  })
  .catch((error) => console.log(error));

```

## Notas

- Es posible registrarse, iniciar sesión con esos datos y ver el nuevo usuario agregado como amigo.
- Queda pendiente implementar la página de publicaciones en la carpeta backend.

