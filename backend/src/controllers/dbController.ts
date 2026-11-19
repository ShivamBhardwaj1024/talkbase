import type { Request, Response } from "express"
import { connectToSql } from "../lib/sql.js"

export async function connectDatabase(req: Request, res: Response){
    try {
        const {name, host, user, database, password} = req.body

        const conn = await connectToSql({host, user, database, password})
        if (!conn) throw new Error('maa ka bhosda, aag')

        const [rows]: any = await conn.execute('SHOW tables');
        console.log('Query Result:', rows[0].solution);

        res.status(200).json({
            message: 'database spin up successfully',
            data: rows[0]
        })   
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "something went wrong"
        })
    }
}