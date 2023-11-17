<<<<<<< HEAD
import mongoose from "mongoose";

const benefitCollection = 'benefits';

const benefitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    text: { type: String, required: true },
    icon: { type: String, required: true }
});

=======
import mongoose from "mongoose";

const benefitCollection = 'benefits';

const benefitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    text: { type: String, required: true },
    icon: { type: String, required: true }
});

>>>>>>> edf39ba066ff11a0c1e5bf276d2f1af66686e1dd
export const benefitModel = mongoose.model(benefitCollection, benefitSchema);