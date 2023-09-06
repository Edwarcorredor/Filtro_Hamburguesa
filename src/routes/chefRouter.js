import { Router } from "express";
import ControllerChef from "../controllers/ControllerChef.js";
import { limitPet } from "../config/limit.js";
import routesVersioning  from 'express-routes-versioning';
import middlewareDTO from "../middlewares/middlewareDTO.js";

const version = routesVersioning();
const chefRouter = Router();

chefRouter
.use(limitPet())
.get('/carnes', version({"1.0.0":  ControllerChef.getChefCarnes}))

export default chefRouter;