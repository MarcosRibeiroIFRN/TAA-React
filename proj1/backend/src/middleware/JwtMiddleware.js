import jwt from "jsonwebtoken";

const verifyToken=(req,res,next)=>{
    try {
        //pegar requisição do cabeçalho
        const token=req.headers.authorization.split(" ")[1];
        const decoded=jwt.verify[token,process.env.SECRET];
        req.userID=decoded;
        next();
    } catch (error) {
        return res.status(401).json({message:"User nnot autorized"})
        return
    }
}
export default verifyToken;