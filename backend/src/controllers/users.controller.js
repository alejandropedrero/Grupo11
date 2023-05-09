import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  const [rows] = await pool.query("SELECT id, name, email FROM users");
  res.json(rows);
};

export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const [rows] = await pool.query(
      "SELECT id, name, email, profile_picture FROM users WHERE id = ?",
      [userId]
    );
    if (!rows.length) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error occurred while fetching the profile." });
  }
};
