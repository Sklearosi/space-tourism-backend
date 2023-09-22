import { Request, Response } from "express";
import DestinationModel, {DestinationDocument} from "models/tourism";

export const getDestinations = async (req: Request, res: Response) => {
  try {
    const destinations: DestinationDocument[] = await DestinationModel.find();

    return res.status(200).json(destinations);
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};