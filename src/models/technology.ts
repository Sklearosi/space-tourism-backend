import mongoose, { Document, Schema, Model } from "mongoose";
import { Technology } from "types";

const technologySchema = new Schema<Technology & Document>({
    name: String,
    images: {
      portrait: String,
      landscape: String,
    },
    description: String,
  });
  

  export interface TechnologyDocument extends Technology, Document {}
  
  
  const TechnologyModel: Model<TechnologyDocument> = mongoose.model<TechnologyDocument>(
    "Technology",
    technologySchema
  );
  
  export default TechnologyModel;