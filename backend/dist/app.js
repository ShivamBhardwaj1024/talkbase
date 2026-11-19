import express from "express";
import morgan from "morgan";
const app = express();
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'i am working fine, but i think you dont'
    });
});
export default app;
//# sourceMappingURL=app.js.map