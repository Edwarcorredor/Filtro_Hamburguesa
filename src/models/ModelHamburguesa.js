import  conexion  from "../config/atlas.js";
import getNextSequenceValue from '../db/autoIncrement.js'
const db = await conexion();
const Hamburguesa = db.collection("hamburguesa");

class ModelHamburguesa {
    /**
     * *Consulta para obtener las hamburguesas con categoria vegetariana 
     */
    static async getHamburguesaVeg(){
        return await Hamburguesa.find({categoria: "Vegetariana"}).toArray();
    }
    
    /**
     * * Consulta para obtener todas las hamburguesas que fueron creadas por el ChefB 
     */
    static async getHamburguesaChefb(){
        return await Hamburguesa.find({chef: "ChefB"}).toArray();
    }

    static async agregarIngrediente(ingredientes){
        return await Hamburguesa.updateOne({nombre: "Clásica"}, {$push : {ingredientes: ingredientes.ingrediente}});
    }

    static async getHamburguesasPan(){
        return await Hamburguesa.find({ingredientes: {$all: ["Pan"]}}).toArray();
    }
}

export default ModelHamburguesa;