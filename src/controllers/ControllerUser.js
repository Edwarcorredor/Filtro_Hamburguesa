import ModelUser from "../models/ModelUser.js";
import  login from "../helpers/authen.js";
import { crearToken } from "../config/jwt.js";

class ControllerUser {

  static async loginUser(req, res, next) {
    try {
        const user = await login(req.body);
        if (!user.email){
          res.json(user);
        }
        const token = await crearToken(user);
        res.status(200).json({ JWT:token, Info:"Usuario logueado correctamente." });
    } catch (error) {
        next(error);
    }
}

  static async setUser(req, res) {
    const result = await ModelUser.setUser(req.body);
    res.json(result);
  }

}

export default ControllerUser;
