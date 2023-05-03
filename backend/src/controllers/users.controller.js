import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  const [rows] = await pool.query("SELECT id, name, email FROM users");
  res.json(rows);
};
