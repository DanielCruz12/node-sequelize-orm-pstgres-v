import { Request, Response } from "express"
import { authService } from "../services/authServices"

const login = async (req: Request, res: Response) => {
    try {
        const data = await authService.login()
    } catch (error) {
        console.log(error)
    }
}

const register = (req: Request, res: Response) => {
    console.log("register")
}

const changePassword = (req: Request, res: Response) => {
    console.log("changePassword")
}

export const authController = {
    login, register, changePassword
}