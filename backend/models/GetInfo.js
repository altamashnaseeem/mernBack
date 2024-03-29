import mongoose, { Schema } from "mongoose";

const infoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  

});

const Startup=mongoose.model("Startup",infoSchema);

export default Startup
