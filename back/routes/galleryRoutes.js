// galleryRoutes.js
import express from "express";
import { getAllImage, uploadImage } from "../controllers/galleryCn.js";

const galleryRoutes = express.Router();

galleryRoutes.route("/").get(getAllImage);

export default galleryRoutes;