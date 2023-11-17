<<<<<<< HEAD
import { benefitManager } from '../dao/manager/index.manager.js';

export default class BenefiteRepository {

    save = async (benefit) => {
        benefit.name = benefit.name.toLowerCase();
        const result = await benefitManager.save(benefit);
        return result;
    };

    getByName = async (benefit) => {
        benefit = benefit.toLowerCase();
        const result = await benefitManager.getByName(benefit);
        return result;
    };

    getAll = async () => {
        const result = await benefitManager.getAll();
        return result;
    }
=======
import { benefitManager } from '../dao/manager/index.manager.js';

export default class BenefiteRepository {

    save = async (benefit) => {
        benefit.name = benefit.name.toLowerCase();
        const result = await benefitManager.save(benefit);
        return result;
    };

    getByName = async (benefit) => {
        benefit = benefit.toLowerCase();
        const result = await benefitManager.getByName(benefit);
        return result;
    };

    getAll = async () => {
        const result = await benefitManager.getAll();
        return result;
    }
>>>>>>> edf39ba066ff11a0c1e5bf276d2f1af66686e1dd
};