import  conexion  from "../config/atlas.js";
import getNextSequenceValue from '../db/autoIncrement.js'
const db = await conexion();
const Categoria = db.collection("categoria");

class ModelCategoria {
    /**
     * *Consulta para obtener las Chefs con especialidad en carnes
     */
    static async getCategoria(){
        return await Categoria.find().toArray();
    }
}

export default ModelCategoria;