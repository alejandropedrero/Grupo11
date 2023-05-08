import { pool } from "../db.js";

export const getPeople = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];
    const [rows] = await pool.query(
      "SELECT id, name, email, profile_picture FROM users WHERE id != ?",
      [userId]
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching people.");
  }
};
