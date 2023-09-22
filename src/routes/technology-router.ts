import { getTechnology } from '../controllers/technology-controller.js';

import express from 'express'

const technologyRouter = express.Router();

technologyRouter.get("/technology", getTechnology)

export default technologyRouter;