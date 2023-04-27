import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  const [rows] = await pool.query(
    "SELECT id, name, last_name, email, location FROM users"
  );
  res.json(rows);
};

export const createUser = (req, res) => res.send("creando usuarios");

export const updateUser = (req, res) => res.send("actualizando usuarios");

export const deleteUser = (req, res) => res.send("eliminando usuarios");
