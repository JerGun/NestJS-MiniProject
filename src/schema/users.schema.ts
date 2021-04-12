import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    birthDate: Date,
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
}, { versionKey: false });

export interface User extends mongoose.Document {
    modifiedAt: number;
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    birthDate: Date,
}