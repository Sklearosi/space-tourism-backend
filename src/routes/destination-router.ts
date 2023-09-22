import { getDestinations } from '../controllers/destination-controller.js';
import express from 'express'

const destinationRouter = express.Router();

destinationRouter.get("/destination", getDestinations)

export default destinationRouter;