import { Router } from "express";
import ControllerCategoria from "../controllers/ControllerCategoria.js";
import { limitPet } from "../config/limit.js";
import routesVersioning  from 'express-routes-versioning';
import middlewareDTO from "../middlewares/middlewareDTO.js";

const version = routesVersioning();
const categoriaRouter = Router();

categoriaRouter
.use(limitPet())
.get('/todas', version({"1.0.0":  ControllerCategoria.getCategoria}))

export default categoriaRouter;