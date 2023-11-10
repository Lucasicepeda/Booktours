import Router from './router.js';
import * as userController from '../controllers/users.controllers.js';
import { passportEnum } from '../config/enums.config.js';

export default class UsersRouter extends Router {
    init() {
        this.post('/register', ['PUBLIC'], passportEnum.NOTHING, userController.register);
        this.post('/login', ['PUBLIC'], passportEnum.NOTHING, userController.login);
        this.get('/', ['USER', 'ADMIN'], passportEnum.JWT, userController.getByEmail);
        this.put('/', ['USER', 'ADMIN'], passportEnum.JWT, userController.updateUser);
    };
};