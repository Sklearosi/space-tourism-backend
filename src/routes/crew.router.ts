import { getCrew } from '../controllers/crew-controller.js';
import express from 'express'

const crewRouter = express.Router();

crewRouter.get("/crew", getCrew)

export default crewRouter;