import express from "express";
import { config } from "dotenv";
import path from "path";
config();
const app = express();

import mainRouter from "./routes";



// Middleware
app.use(express.json()); // Convierte la req.body a un JSON
// Puerto
app.set("port", process.env.PORT || 3000);


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, "public", "index.html"));

})
app.use(mainRouter);


export default app;