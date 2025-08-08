import { Router } from "express";
import { signIn, signUp } from "../Controllers/user.controller.js";


const userRouter = Router()


userRouter.post('/signup',signUp)
userRouter.post('/signin',signIn)


export {userRouter}