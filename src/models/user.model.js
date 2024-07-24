import pool from "../config/db.js";
class UserManager {
  getAllUsers = async () => {
    try {
      const [rows] = await pool.query("SELECT * FROM users");
      return rows;
    } catch (err) {
      throw new Error("Error retrieving users: " + err.message);
    }
  };

  getUserById = async (id) => {
    try {
      const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
      return rows[0];
    } catch (err) {
      throw new Error("Error retrieving user by ID: " + err.message);
    }
  };

  createUser = async (user) => {
    try {
      const { username, email, first_name, last_name, age, password } = user;
      const [result] = await pool.query("INSERT INTO users (username, email, first_name, last_name, age, password) VALUES (?, ?, ?, ?, ?, ?)", [username, email, first_name, last_name, age, password]);
      return "User created: ", user;
    } catch (err) {
      throw new Error("Error creating user: " + err.message);
    }
  };

  updateUser = async (id, user) => {
    try {
      const { username, email, first_name, last_name, age, password } = user;
      await pool.query("UPDATE users SET username = ?, email = ?, first_name = ?, last_name = ?, age = ?, password = ? WHERE id = ?", [username, email, first_name, last_name, age, password, id]);
      return "User updated successfully";
    } catch (err) {
      throw new Error("Error updating user: " + err.message);
    }
  };

  deleteUser = async (id) => {
    try {
      await pool.query("DELETE FROM users WHERE id = ?", [id]);
      return "User deleted successfully";
    } catch (err) {
      throw new Error("Error deleting user: " + err.message);
    }
  };
}
export default UserManager;
