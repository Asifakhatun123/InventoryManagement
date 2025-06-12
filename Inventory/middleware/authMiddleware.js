
import jwt from 'jsonwebtoken'
import User from '../models/User.js';

const authMiddleware= async(req,res,next)=>{
    try{
       const token = req.headers.authorization?.split(" ")[1];
       console.log("token is sent", token);
       

        if(!token){
            return res.status(401).json({success:false,message:"no taken provided"})
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({success:false,message:"invalid token"})
        }
        // const user= await User.findById({_id:decoded._id});
        const user = await User.findById(decoded.id);

        if(!user){
            return res.status(401).json({success:false,message:"user not found"})
        }
        req.user= user;
        next();
    }catch(error){
        console.log("error is",error);
        
        return res.status(500).json({success:false,message:"internal server error.in middleware.."})
    }
}
export default authMiddleware;

