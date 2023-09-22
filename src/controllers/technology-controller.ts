import { Request, Response } from "express";
import TechnologyModel, { TechnologyDocument } from "models/technology";


export const getTechnology = async (req: Request, res: Response) => {
  try {
    const destinations: TechnologyDocument[] = await TechnologyModel.find();

    return res.status(200).json(destinations);
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};