import { User } from "../models/user";

const create = async (userData: any) => {
    return await User.create(userData);
};

const getAll = async () => {
    return await User.findAll();
};

const getById = async (id: string) => {
    return await User.findByPk(id);
};

const update = async (id: string, userData: any) => {
    const user = await User.findByPk(id);
    if (user) {
        return await user.update(userData);
    }
    return null;
};

const deleteUser = async (id: string) => {
    const user = await User.findByPk(id);
    if (user) {
        await user.destroy();
        return user;
    }
    return null;
};

export const userServices = {
    create,
    getAll,
    getById,
    update,
    deleteUser
};
