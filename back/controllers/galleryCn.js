import Gallery from "../model/gallery.js";

export const getAllImage = async(req,res,next)=>{
    const Images = await Gallery.find();
    return res.status(200).json({
        status: "success",
        data: Images,
    });
};

export const uploadImage = async (req,res,next)=>{
    console.log(req.body)
    const newImage = await Gallery.create({
        name: req.body.filename,
        imagePath: '/media/'+req.file.filename,
        
    });
    return res.status(200).json({
        status:"success",
        message: "File Uploaded",
    });
};