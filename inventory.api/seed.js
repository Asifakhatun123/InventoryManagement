import bcrypt from 'bcrypt'
import User from './models/User.js'
import connectDB from './db/connection.js'
import dotenv from 'dotenv'

dotenv.config();

const register = async ()=>{
    try{
        await connectDB();
        const existingUser= await User.findOne({email:"admin@gmail.com"});
        if(existingUser){
            console.log("already exitst");
            return
            
        }
        const hashpassword= await bcrypt.hash("1234567891",10);

        const newUser = new User({
            name:"admin",
            email:"admin@gmail.com",
            password:hashpassword,
            address:"kolkata",
            role:"admin"
        })
        await newUser.save();
        console.log(newUser);
        
        console.log("admin user created succesfully");
        
    }catch(error){
        console.log(error);
        
    }
}

register();