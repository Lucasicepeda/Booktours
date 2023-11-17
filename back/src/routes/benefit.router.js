<<<<<<< HEAD
import Router from './router.js';
import * as benefitController from '../controllers/benefites.controllers.js';
import { passportEnum } from '../config/enums.config.js';

export default class BenefitRouter extends Router {
    init() {
        this.post('/', ['ADMIN'], passportEnum.JWT, benefitController.save);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, benefitController.getAll);
    };
=======
import Router from './router.js';
import * as benefitController from '../controllers/benefites.controllers.js';
import { passportEnum } from '../config/enums.config.js';

export default class BenefitRouter extends Router {
    init() {
        this.post('/', ['ADMIN'], passportEnum.JWT, benefitController.save);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, benefitController.getAll);
    };
>>>>>>> edf39ba066ff11a0c1e5bf276d2f1af66686e1dd
};