import mongoose, { Document, Schema, Model } from "mongoose";
import { Crew } from "types";

const crewSchema = new Schema<Crew & Document>({
    name: String,
    role: String,
    images: {
      portrait: String,
      landscape: String,
    },
    bio: String,
  });
  

  export interface CrewDocument extends Crew, Document {}
  
  
  const CrewModel: Model<CrewDocument> = mongoose.model<CrewDocument>("Crew", crewSchema);
  
  export default CrewModel;