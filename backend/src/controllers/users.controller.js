import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  const [rows] = await pool.query(
    "SELECT id, name, email, profile_picture FROM users"
  );
  res.json(rows);
};

export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const [rows] = await pool.query(
      "SELECT id, name, email, profile_picture, birthdate, linkedin, time_availability, city, country, cert_1, cert_2, lang_1, lang_2, hobby_1, hobby_2 FROM users WHERE id = ?",
      [userId]
    );
    if (!rows.length) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = rows[0];
    const imageUrl = `/img-users/${user.profile_picture}`;
    user.imageUrl = imageUrl;

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error occurred while fetching the profile." });
  }
};

export const updateCurrentUser = async (req, res) => {
  try {
    const userData = req.body; //Para hacer una request solo del json del body
    console.log(req.body);
    const userId = req.params.id;
    const [rows] = await pool.query(
      "UPDATE users SET name = '" +
        userData.name +
        "', email = '" +
        userData.email +
        "', city = '" +
        userData.city +
        "', country = '" +
        userData.country +
        "', birthdate = '" +
        userData.birthdate +
        "', time_availability = '" +
        userData.time_availability +
        "', linkedin = '" +
        userData.linkedin +
        "' WHERE id = " +
        userId +
        ""
    );
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error occurred while updating the profile." });
  }
};


export const updateLang = async (req, res) => {
  try {
    const userData = req.body;
    console.log(req.body);
    const userId = req.params.id;
    const [rows] = await pool.query(
      "UPDATE users SET lang_1 = '" +
        userData.lang_1 +
        "', lang_2 = '" +
        userData.lang_2 +
        "' WHERE id = " +
        userId +
        ""
    );
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error occurred while updating the profile." });
  }
};

export const updateCert = async (req, res) => {
  try {
    const userData = req.body;
    console.log(req.body);
    const userId = req.params.id;
    const [rows] = await pool.query(
      "UPDATE users SET cert_1 = '" +
        userData.cert_1 +
        "', cert_2 = '" +
        userData.cert_2 +
        "' WHERE id = " +
        userId +
        ""
    );
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error occurred while updating the profile." });
  }
};


export const updateHobb = async (req, res) => {
  try {
    const userData = req.body;
    console.log(req.body);
    const userId = req.params.id;
    const [rows] = await pool.query(
      "UPDATE users SET hobby_1 = '" +
        userData.hobby_1 +
        "', hobby_2 = '" +
        userData.hobby_2 +
        "' WHERE id = " +
        userId +
        ""
    );
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error occurred while updating the profile." });
  }
};

