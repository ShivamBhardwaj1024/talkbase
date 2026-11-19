import { model, Schema } from "mongoose";
const databaseSchema = new Schema({
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
}, { timestamps: true });
const DatabaseModel = model("Database", databaseSchema);
export default DatabaseModel;
//# sourceMappingURL=database.js.map