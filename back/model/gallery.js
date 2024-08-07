import mongoose from "mongoose";

const gallerySchema = mongoose.Schema(
  {
    imagePath: {
      type: String,
      required: [true, "Please Provide An Image"],
    },
    name:{
        type: String,
    }
  },
  { timeStamps: true }
);

const Gallery = mongoose.model("Gallery", gallerySchema);

export default Gallery;
