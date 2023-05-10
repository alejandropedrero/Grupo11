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

//Function to update user data in the database
export const updateCurrentUser = async (req, res) => {
  try {
    const userData = req.body; //Para hacer una request solo del json del body en edit-profile.js
    const userId = req.params.id;
    const [rows] = await pool.query(
      "UPDATE users SET name = '"+userData.name+"', email = '"+userData.email+"' WHERE id = "+userId+""
    );
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error occurred while updating the profile." });
  }
};