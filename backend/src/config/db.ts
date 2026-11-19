import mongoose from "mongoose";

export default async function connectDB() {
    try{
        const url = process.env.MONGODB_URI
        console.log(url)
        if (!url) throw new Error('tere maa ke chut bsdk')
    
        await mongoose.connect(url)
        console.log('database connected')
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}