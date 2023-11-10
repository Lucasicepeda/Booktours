import { userManager } from '../dao/manager/index.manager.js';

export default class UserRepository {

    register = async (user) => {
        user.name = user.name.toLowerCase();
        user.lastName = user.lastName.toLowerCase();
        const result = await userManager.register(user);
        return result;
    };

    getByEmail = async (email) => {
        const result = await userManager.getByEmail(email);
        return result;
    };

    updateUser = async (id, user) => {
        user.name = user.name.toLowerCase();
        user.lastName = user.lastName.toLowerCase();
        const result = await userManager.updateUser(id, user);
        return result;
    };
};