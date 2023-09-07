import ModelHamburguesa from "../models/ModelHamburguesa.js";

class ControllerHamburguesa{

    static async getHamburguesaVeg(req, res, next) {
        res.json( await ModelHamburguesa.getHamburguesaVeg());
    }

    static async getHamburguesaChefb(req, res, next) {
        res.json( await ModelHamburguesa.getHamburguesaChefb());
    }
}

export default ControllerHamburguesa;