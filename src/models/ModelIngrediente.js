import  conexion  from "../config/atlas.js";
import getNextSequenceValue from '../db/autoIncrement.js'
const db = await conexion();
const Ingrediente = db.collection("ingrediente");

class ModelIngrediente {
    /**
     * *Encontrar todos los ingredientes con stock menor a 400
     */
    static async getStockMenor(){
        return await Ingrediente.find({stock: {$lte: 400}}).toArray();
    }
}

export default ModelIngrediente;