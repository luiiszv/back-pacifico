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


app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>API Pacífico</title>
      <style>
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f0f4f8;
        }

        .container {
          text-align: center;
          padding: 2rem;
          border-radius: 12px;
          background-color: white;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        h1 {
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }

        p {
          margin: 0;
          color: #555;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🌊 API Pacífico</h1>
        <p>Bienvenido al backend del sistema</p>
      </div>
    </body>
    </html>
  `);
});
app.use(mainRouter);


export default app;