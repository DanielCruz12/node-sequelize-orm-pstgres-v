import { Request, Response } from "express";
import { userServices } from "../services/userServices";

const createUser = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, userType } = req.body;
    try {
        const data = await userServices.create({ firstName, lastName, email, password, userType });
        res.status(201).json({ message: "User created successfully", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getUsers = async (req: Request, res: Response) => {
    try {
        const data = await userServices.getAll();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const data = await userServices.getById(id);
        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { firstName, lastName, email, userType } = req.body;
    try {
        const data = await userServices.update(id, { firstName, lastName, email, userType });
        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const data = await userServices.deleteUser(id);
        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const usersController = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};
