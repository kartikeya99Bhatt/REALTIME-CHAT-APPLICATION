import express from "express";
import {register,login,logout, getOtherUsers} from "../controller/useController.js"
import isAuthenticate from "../middleware/isAuthenticates.js";
const router=express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(isAuthenticate,getOtherUsers);
export default router;