import express from "express";
import usersController from "../controllers/usersController.js";

const router = express.Router();

router.get("/", usersController.getAllUsers);
router.get("/raw", usersController.getAllUsersRaw);
router.get("/:id", usersController.getUserById);

router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

export default router;
