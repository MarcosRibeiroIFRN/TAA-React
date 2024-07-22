import multer from "multer";
import {v4 as uuidv4} from "uuid";

const storage = multer.diskStorage({
    //cb s callback function
    destination: (req,file,cb,next)=>{
        cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        // const sufix = Date.now() +"-"+ Math.round(Math.random() *1E9);
        // cb(null,file.fieldname + "-"+sufix+".xlsx")
        cb(null,`${uuidv4()}.xlsx`)
    }
})
export const upload = multer({storage :storage});