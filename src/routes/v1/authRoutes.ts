import { Router } from "express";
import { authController } from "../../controllers/authControllers";

const authRoutes = Router()
authRoutes.post("/login", authController.login)
authRoutes.post("/register", authController.register)
authRoutes.post("/change-password", authController.changePassword)

export { authRoutes }