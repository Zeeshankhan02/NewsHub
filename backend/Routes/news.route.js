import {Router} from "express"
import { Articles } from "../Controllers/Api.controller.js";
import { UserAuth } from "../Middleware/userAuth.middleware.js";

const apiRouter = Router()

apiRouter.get('/news',UserAuth,Articles)

export {apiRouter}