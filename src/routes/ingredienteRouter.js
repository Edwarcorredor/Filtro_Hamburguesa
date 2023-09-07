import { Router } from "express";
import ControllerIngrediente from "../controllers/ControllerIngrediente.js";
import { limitPet } from "../config/limit.js";
import routesVersioning  from 'express-routes-versioning';
import middlewareDTO from "../middlewares/middlewareDTO.js";

const version = routesVersioning();
const ingredienteRouter = Router();

ingredienteRouter
.use(limitPet())
.get('/stockmenor', version({"1.0.0":  ControllerIngrediente.getStockMenor}))
.put('/aumentar', version({"1.0.0": ControllerIngrediente.aumentarPrecio}))
.delete('/sinstock', version({"1.0.0": ControllerIngrediente.eliminarSinStock}))

export default ingredienteRouter;