import { Router } from "express";
import { connectDatabase } from "../controllers/dbController.js";

const dbRoute = Router()

dbRoute.post('/connect', connectDatabase)

export default dbRoute