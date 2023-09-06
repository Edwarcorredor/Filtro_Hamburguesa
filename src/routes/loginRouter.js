import { Router } from 'express';
import ControllerUser from '../controllers/ControllerUser.js';
const loginRouter = Router();

loginRouter.post('/vendedores', ControllerUser.loginUser);

export default loginRouter;