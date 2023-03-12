import express from "express";
import { register, login, logout ,registerMobile} from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/registerMobile", registerMobile);


export default router;
