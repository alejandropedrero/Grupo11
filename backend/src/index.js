import express from "express";
import path from "path";
import usersRoutes from "./routes/users.routes.js";
import indexRoutes from "./routes/ping.routes.js";
import loginRoutes from "./routes/login.routes.js";
import homeRoutes from "./routes/home.routes.js";
import registerRoutes from "./routes/register.routes.js";

const app = express();

app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(registerRoutes);
app.use(homeRoutes);
app.use(loginRoutes);
app.use(usersRoutes);
app.use(indexRoutes);

app.listen(3000);

console.log(`Server running on port ${3000}`);
