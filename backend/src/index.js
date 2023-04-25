import express from "express";
import usersRoutes from "./routes/users.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(usersRoutes);
app.use(indexRoutes);

app.listen(3000);

console.log("Server running on port 3000");
