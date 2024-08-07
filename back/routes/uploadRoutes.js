// uploadRoutes.js
import express from "express";
import { uploadImage } from "../controllers/galleryCn.js";

const uploadRoutes = express.Router();

uploadRoutes.route("/").post(uploadImage);

export default uploadRoutes;