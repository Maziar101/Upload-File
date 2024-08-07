import mongoose from "mongoose";
import app from "./app.js";

app.listen(5000,()=>{
    console.log("Server is Running On Port 5000");
});
mongoose.connect("mongodb+srv://maziar:maziar@cluster0.iroa2my.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err);
});
