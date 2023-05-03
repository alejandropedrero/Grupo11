import { pool } from "../db.js";
import bcrypt from "bcrypt";

export const getRegister = (req, res) => {
  res.render("register");
};

export const validateRegister = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (email, password, name) VALUES (?, ?, ?)",
      [email, hashedPassword, name]
    );

    return res.status(200).redirect("/login");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
};
