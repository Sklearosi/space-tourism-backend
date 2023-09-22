import { Request, Response } from "express";
import CrewModel, { CrewDocument } from "models/crew";


export const getCrew = async (req: Request, res: Response) => {
  try {
    const destinations: CrewDocument[] = await CrewModel.find();

    return res.status(200).json(destinations);
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};