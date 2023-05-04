import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import usersRoutes from "./routes/users.routes.js";
import indexRoutes from "./routes/index.routes.js";
import loginRoutes from "./routes/login.routes.js";
import registerRoutes from "./routes/register.routes.js";
import peopleRoutes from "./routes/people.routes.js";
import profileRoutes from "./routes/profile.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Carpeta para archivos estáticos
app.use(express.static(path.join(__dirname, "../../frontend")));

// Para procesar datos enviados desde formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/index", indexRoutes);
app.use("/users", usersRoutes);
app.use("/people", peopleRoutes);
app.use("/profile", profileRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../../frontend/views/404.html"));
});

app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});
