import express from "express";
import morgan from "morgan";
import dbRoute from "./routes/dbRoute.js";

const app = express()

app.use(express.json({limit: '10kb'}))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

app.use('/api/v1/database', dbRoute)

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'i am working fine, but i think you dont'
    })
})

export default app