import UserManager from "../models/user.model.js";
const userManager = new UserManager();

function getAllUsers() {
  return userManager.getAllUsers();
}

function getUserById(id) {
  return userManager.getUserById(id);
}

function createUser(user) {
  return userManager.createUser(user);
}

function updateUser(id, user) {
  return userManager.updateUser(id, user);
}

function deleteUser(id) {
  return userManager.deleteUser(id);
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
