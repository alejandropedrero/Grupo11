import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import cookieParser from "cookie-parser";
import usersRoutes from "./routes/users.routes.js";
import indexRoutes from "./routes/ping.routes.js";
import loginRoutes from "./routes/login.routes.js";
import homeRoutes from "./routes/home.routes.js";
import registerRoutes from "./routes/register.routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Ruta de Views
app.set("views", path.join(__dirname, "views"));

// Motor de plantillas
app.set("view engine", "ejs");

// Carpeta para archivos estáticos
app.use(express.static("public"));

// Para procesar datos enviados desde formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Variables de entorno
dotenv.config({ path: "./env/.env" });

// Cookies
// app.use(cookieParser);

app.get("/", (req, res) => {
  res.render("index");
});

app.use(registerRoutes);
app.use(homeRoutes);
app.use(loginRoutes);
app.use(usersRoutes);
app.use(indexRoutes);

app.listen(3000);

console.log(`Server running on port ${3000}`);
