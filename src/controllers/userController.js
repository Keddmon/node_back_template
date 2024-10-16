import { UserService } from '../service/userService';

export const getUsers = async (req, res) => {
    try {
        const userService = new UserService();
        const data = await userService.getUsers();

        return res.status(200).json({
            status: 200,
            message: 'success',
            data: data,
        });
    } catch (e) {
        res.status(500).json({
            status: 500,
            message: 'server error',
            data: e.message,
        });
    }
};

export const getOneUser = async (req, res) => {
    try {
        const userService = new UserService();
        const data = await userService().getOneUser();

        return res.status(200).json({
            status: 200,
            message: 'success',
            data: data,
        });
    } catch (e) {
        res.status(500).json({
            status: 500,
            message: 'server error',
            data: e.message,
        });
    }
};