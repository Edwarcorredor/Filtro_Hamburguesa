import { Router } from "express";
import  ControllerUser  from "../controllers/ControllerUser.js";
import { limitPet } from "../config/limit.js";
import routesVersioning  from 'express-routes-versioning';
import middlewareDTO from "../middlewares/middlewareDTO.js";

const version = routesVersioning();
const userRouter = Router();
userRouter
.use(limitPet())


.post("/crear", middlewareDTO,version({
    "1.0.0": ControllerUser.setUser}))

export default userRouter;
