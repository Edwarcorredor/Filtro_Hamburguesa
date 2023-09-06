import  conexion  from "../config/atlas.js";
import getNextSequenceValue from '../db/autoIncrement.js'
const db = await conexion();
const Chef = db.collection("chef");

class ModelChef {
    /**
     * *Consulta para obtener las Chefs con especialidad en carnes
     */
    static async getChefCarnes(){
        return await Chef.find({especialidad: "Carnes"}).toArray();
    }
}

export default ModelChef;