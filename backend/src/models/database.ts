import { model, Schema } from "mongoose";

interface Database {
    name: string;
    host: string;
    port: number;
    database: string;
    password: string;
}

const databaseSchema = new Schema<Database>({
    name: {
        type: String,
        enum: ['mysql'],
        required: true
    },
    host: {
        type: String,
        required: true
    },
    port: {
        type: Number,
        required: true
    },
    database: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true})

const DatabaseModel = model<Database>("Database", databaseSchema)
export default DatabaseModel