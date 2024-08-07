 // app.js
import express from "express";
import cors from "cors";
import galleryRoutes from "./routes/galleryRoutes.js";
import multer from "multer";
import path from "path";
import uploadRoutes from "./routes/uploadRoutes.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json({limit:'1000mb'}));
app.use(bodyParser.urlencoded({extended:true,limit:'1000mb'})); 


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/media");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        );
    }
});

// اینجا تابع upload تعریف شده است
export const upload = multer({
    storage: storage,
});

app.use("/api/images", galleryRoutes);
app.use("/api/images/upload",upload.single("file"), uploadRoutes);
export default app;