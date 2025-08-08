import jwt from "jsonwebtoken"

export const UserAuth = (req,res,next) =>{
  const token = req.headers.token
 
  try {
    const validUser = jwt.verify(token,process.env.JWT_SECRET)
    if (!validUser) {
      return res.status(403).json({
        message:"Please Sign In First"
      })
    }
    next()
  
  } catch (error) {
    return res.status(403).json({
      message:"Invalid token id"
    })
  }
}