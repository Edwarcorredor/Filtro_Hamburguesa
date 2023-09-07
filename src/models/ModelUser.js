import  conexion  from "../config/atlas.js";
import getNextSequenceValue from '../db/autoIncrement.js'
import { hash } from "bcrypt";
const db = await conexion();
const Vendedor = db.collection("vendedor");

class ModelUser {

    /**
     * * Consulta para obtener la información del usuario registrado
     */
    static async getUser(id){
        return await Vendedor.find({_id: id}).toArray();
    }

    /**
     ** Funcion para crear el nuevo vendedor, primero se verifica que no este registrado el correo
     */
    static async setUser(datos){
        try{
            const checkEmail = await Vendedor.findOne({ email: datos.email });
            if (checkEmail) {
                return "Correo ya registrado"
            }
            const userInsert = await Vendedor.insertOne({
                _id: await getNextSequenceValue(db, "vendedor"),
                ...datos,
                password: await hash(datos.password, 10),
            });
            return userInsert;
        }catch (error) {
            console.log("🚀 ~ file: user.controller.js:14 ~ userPost ~ error:", error);
            return error 
        }     
    }

}


export default ModelUser;