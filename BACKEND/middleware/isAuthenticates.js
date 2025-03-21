import jwt from "jsonwebtoken"
const isAuthenticate=async(req,res,next)=>{
    try {
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({message:"user not authenticated."});
        }
        const decode=await jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log("The decode data"+decode);
        if(!decode){
            return res.status(401).json({message:"Invalid token."});
        };
        req.id=decode.userId;
        next();
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticate;