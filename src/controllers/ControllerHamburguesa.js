import ModelHamburguesa from "../models/ModelHamburguesa.js";

class ControllerHamburguesa{

    static async getHamburguesaVeg(req, res, next) {
        res.json( await ModelHamburguesa.getHamburguesaVeg());
    }

    static async getHamburguesaChefb(req, res, next) {
        res.json( await ModelHamburguesa.getHamburguesaChefb());
    }

    static async agregarIngrediente(req, res, next) {
        res.json( await ModelHamburguesa.agregarIngrediente(req.body));
    }

    static async getHamburguesasPan(req, res, next) {
        res.json( await ModelHamburguesa.getHamburguesasPan());
    }
}

export default ControllerHamburguesa;