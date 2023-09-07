import { Router } from "express";
import ControllerHamburguesa from "../controllers/ControllerHamburguesa.js";
import { limitPet } from "../config/limit.js";
import routesVersioning  from 'express-routes-versioning';
import middlewareDTO from "../middlewares/middlewareDTO.js";

const version = routesVersioning();
const hamburguesaRouter = Router();

hamburguesaRouter
.use(limitPet())
.get('/vegetariana', version({"1.0.0":  ControllerHamburguesa.getHamburguesaVeg}))
.get('/chefb', version({"1.0.0": ControllerHamburguesa.getHamburguesaChefb}))
.put('/agregar', middlewareDTO, version({"1.0.0": ControllerHamburguesa.agregarIngrediente}))
.get('/pan', version({"1.0.0": ControllerHamburguesa.getHamburguesasPan}))
export default hamburguesaRouter;