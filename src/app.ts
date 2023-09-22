import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './config/mongo.js';
import destinationRouter from './routes/destination-router.js';
import swaggerMiddleware from './middlewares/swagger-middleware.js';
import technologyRouter from './routes/technology-router.js';
import crewRouter from './routes/crew.router.js';

dotenv.config();
connect();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", destinationRouter)
app.use("/api", technologyRouter)
app.use("/api", crewRouter)

app.use("/", ...swaggerMiddleware)

app.listen(process.env.PORT || 3000);
