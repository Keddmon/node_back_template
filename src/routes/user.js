import express from "express";
import { getOneUser, getUsers } from "../controllers/userController";

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getOneUser);

export default router;