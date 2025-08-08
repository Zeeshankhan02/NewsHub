import { z } from "zod";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { userModel } from "../Models/user.model.js";

export const signUp = async (req, res) => {
  const requireBody = z
    .object({
      name: z.string(),
      email: z.email(),
      password: z.string().min(6),
      confirmPassword: z.string().min(6),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  const parsedData = requireBody.safeParse(req.body);
  if (!parsedData.success) {
    const messages = JSON.parse(parsedData.error.message)
    return res.json({
      message: messages[0].message,
      error: parsedData.error.errors,
    });

  }

  const { name, email, password } = parsedData.data;

  const existingUser = await userModel.findOne({email})
  
  if (existingUser) {
    return res.status(200).json({
      success:false,
      message:"User Already exists"
    })
  }
  else{
  const hashPassword = await bcrypt.hash(password,8)

  try {
    const userSignup = await userModel.create({
      name,
      email,
      password:hashPassword
    });

    if (!userSignup) {
      return res.status(500).json({
        success:false,
        message:"Failed to sign up"
      })      
    }
    res.status(200).json({
      success:true,
      message:"Sign Up Successfull"
    })
  } catch (error) {
    return res.status(500).json(error)
  }
  }
};

export const signIn = async (req, res) => {
  const {email,password} = req.body

  if (!email && !password)  {
    return res.json({
      message:"Please Enter the required fields"
    })    
  }

  try {
    const user = await userModel.findOne({email})
    
    if(!user){
      return res.json({
        success: false,
        message:"User Does Not Exist or Invalid Email"
      })
    }

    const hashPassword = await bcrypt.compare(password,user.password) 
    console.log(hashPassword);
    
    if (hashPassword) {
      const token = jwt.sign(user._id.toString(),process.env.JWT_SECRET)
      return res.status(200).json({
        success: true,
        message:"Sign In Successfull",
        token:token
      })
    }else{
      return res.json({
        success: false,
        message:"Incorrect Credentails"
      })
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:"Failed to sign In"
    })
  }
}
