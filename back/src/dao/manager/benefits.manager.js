<<<<<<< HEAD
import { benefitModel } from '../models/benefits.model.js';

export default class Benefit {

    save = async (benefit) => {
        return await benefitModel.create(benefit);
    };

    getByName = async (benefit) => {
        return await benefitModel.findOne({ name: benefit }).lean();
    };

    getAll = async () => {
        return await benefitModel.find().lean();
    };
=======
import { benefitModel } from '../models/benefits.model.js';

export default class Benefit {

    save = async (benefit) => {
        return await benefitModel.create(benefit);
    };

    getByName = async (benefit) => {
        return await benefitModel.findOne({ name: benefit }).lean();
    };

    getAll = async () => {
        return await benefitModel.find().lean();
    };
>>>>>>> edf39ba066ff11a0c1e5bf276d2f1af66686e1dd
};