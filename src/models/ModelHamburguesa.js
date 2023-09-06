import  conexion  from "../config/atlas.js";
import getNextSequenceValue from '../db/autoIncrement.js'
const db = await conexion();
const Hamburguesa = db.collection("hamburguesa");

class ModelHamburguesa {
    /**
     * *
     */
    static async getHamburguesaVeg(){
        return await Hamburguesa.find({categoria: "Vegetariana"}).toArray();
    }
}

export default ModelHamburguesa;