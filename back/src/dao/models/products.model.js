import mongoose from "mongoose";

const productCollection = 'products';

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    smalldescription: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    url: { type: String, required: true },
    category: { type: String, required: true }
});

export const productModel = mongoose.model(productCollection, productSchema);