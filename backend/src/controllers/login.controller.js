import { pool } from "../db.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "./env/.env") });

export const getLogin = (req, res) => {
  res.render("login");
};

export const validateLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (rows.length === 0) {
      return res.status(401).send("<h1>Email o password incorrectos</h1>");
    }

    const hashedPassword = rows[0].password;

    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordValid) {
      return res.status(401).send("<h1>Email o password incorrectos</h1>");
    }

    const user = { id: rows[0].id, email: rows[0].email };

    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("jwt", token, { httpOnly: true, secure: true });

    return res.redirect("/index");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error occurred while logging in");
  }
};
