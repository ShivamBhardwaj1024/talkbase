interface Database {
    name: string;
    host: string;
    port: number;
    database: string;
    password: string;
}
declare const DatabaseModel: import("mongoose").Model<Database, {}, {}, {}, import("mongoose").Document<unknown, {}, Database, {}, import("mongoose").DefaultSchemaOptions> & Database & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, Database & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export default DatabaseModel;
//# sourceMappingURL=database.d.ts.map