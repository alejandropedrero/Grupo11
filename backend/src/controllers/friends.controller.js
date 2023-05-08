import { pool } from "../db.js";

export const addFriend = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];
    const { name } = req.body;

    const [rows] = await pool.query("SELECT id FROM users WHERE name = ?", [
      name,
    ]);
    const friendId = rows[0].id;

    const [existingRows] = await pool.query(
      "SELECT * FROM friends WHERE user_id = ? AND friend_id = ?",
      [userId, friendId]
    );
    if (existingRows.length > 0) {
      res.status(400).send("The friendship already exists.");
      return;
    }

    const now = new Date().toISOString().slice(0, 19).replace("T", " ");
    await pool.query(
      "INSERT INTO friends (user_id, friend_id, friendship_date) VALUES (?, ?, ?)",
      [userId, friendId, now]
    );

    res.status(200).send("Friend added.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while adding friend.");
  }
};

export const getFriends = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];
    const [rows] = await pool.query(
      "SELECT users.* FROM users INNER JOIN friends ON users.id = friends.friend_id WHERE friends.user_id = ?",
      [userId]
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching friends");
  }
};
