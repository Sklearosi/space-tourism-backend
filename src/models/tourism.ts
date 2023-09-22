import mongoose, { Document, Schema, Model } from "mongoose";
import { Destination } from "types";

const destinationSchema = new Schema<Destination & Document>({
    name: {
      type: String,
    },
    images: {
      png: String,
      webp: String,
    },
    description: String,
    distance: String,
    travel: String,
  });

  

  export interface DestinationDocument extends Destination, Document {}
  
  const DestinationModel: Model<DestinationDocument> = mongoose.model(
    "Destination",
    destinationSchema
  );
  
  export default DestinationModel;




  
  
  