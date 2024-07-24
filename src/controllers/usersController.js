import userService from "../services/usersService.js";
import UserDTO from "../DTO/user.dto.js";

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    const formatedUsers = [];
    users.forEach((user) => {
      let formatedUser = new UserDTO(user);
      formatedUsers.push(formatedUser);
    });
    res.json(formatedUsers);
  } catch (error) {
    req.logger.error(`Failed to get all users: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
}
async function getAllUsersRaw(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    req.logger.error(`Failed to get all users: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
}

async function getUserById(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    if (user) {
      res.json(new UserDTO(user));
    } else {
      req.logger.info(`User not found`);
      res.status(400).json({ error: "User not found" });
    }
  } catch (error) {
    req.logger.error(`Failed to get user: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
}

async function createUser(req, res) {
  try {
    const user = await userService.createUser(req.body);
    res.status(200).json({ "new user": new UserDTO(user) });
  } catch (error) {
    req.logger.error(`Failed to create user: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
}

async function updateUser(req, res) {
  try {
    await userService.updateUser(req.params.id, req.body);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    req.logger.error(`Failed to update user: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    if (user) {
      await userService.deleteUser(req.params.id);
      res.status(200).json({ message: "User deleted" });
    } else {
      req.logger.info(`User not found`);
      res.status(400).json({ error: "User not found" });
    }
  } catch (error) {
    req.logger.error(`Failed to update delete: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
}

export default {
  getAllUsers,
  getAllUsersRaw,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
