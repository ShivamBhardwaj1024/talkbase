import 'dotenv/config'
import app from "./app.js";
import connectDB from './config/db.js';

async function startServer(){
    await connectDB()

    const PORT = process.env.PORT
    if (!PORT) throw new Error('hatt bsdk')

    app.listen(PORT,  () => {
        console.log('server is running on port', PORT)
    })
}

startServer()