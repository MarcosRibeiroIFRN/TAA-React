import Datasets from "../models/Datasets.js"



export async function createDataset(req,res){
    const{name,desciption}=req.body;
    const filePath=req.file ? req.file.filePath :null;
}
if (filePath===null){
    return res.status(400).send({message:"File not send"});
}