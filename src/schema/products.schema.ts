import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
}, { versionKey: false });

export interface Product extends mongoose.Document {
    id: String;
    title: String;
    description: String;
    price: Number;
    modifiedAt: Number;
}