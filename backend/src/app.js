import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js";
import loginRoutes from "./routes/login.routes.js";
import registerRoutes from "./routes/register.routes.js";
import peopleRoutes from "./routes/people.routes.js";
import friendRoutes from "./routes/friends.routes.js";
import postsRoutes from "./routes/posts.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "../../frontend")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(registerRoutes);
app.use(loginRoutes);
app.use(postsRoutes);
app.use(usersRoutes);
app.use(peopleRoutes);
app.use(friendRoutes);

app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});
