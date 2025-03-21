import express from "express";
import { sendMessage,getMessage } from "../controller/messageController.js";
import isAuthenticate from "../middleware/isAuthenticates.js";
const router=express.Router();
router.route("/send/:id").post(isAuthenticate,sendMessage);
router.route("/:id").get(isAuthenticate, getMessage);
export default router;