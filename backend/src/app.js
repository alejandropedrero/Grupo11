import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import usersRoutes from "./routes/users.routes.js";
import indexRoutes from "./routes/index.routes.js";
import loginRoutes from "./routes/login.routes.js";
import registerRoutes from "./routes/register.routes.js";
import peopleRoutes from "./routes/people.routes.js";
import profileRoutes from "./routes/profile.routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Ruta de Views
app.set("views", path.join(__dirname, "views"));

// Carpeta para archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Motor de plantillas
app.set("view engine", "ejs");

// Para procesar datos enviados desde formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(registerRoutes);
app.use(loginRoutes);
app.use(indexRoutes);
app.use(usersRoutes);
app.use(peopleRoutes);
app.use(profileRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(3000);

console.log(`Server running on port ${3000}`);
