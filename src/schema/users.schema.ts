import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    usernmae: String,
    password: String,
    firstName: String,
    lastName: String,
    birthDate: Date,
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
}, { versionKey: false });

export interface User extends mongoose.Document {
    modifiedAt: number;
    usernmae: String,
    password: String,
    firstName: String,
    lastName: String,
    birthDate: Date,
}