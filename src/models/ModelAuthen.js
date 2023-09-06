import conexion from "../config/atlas.js";

const db = await conexion();


export default class ModelAuthen {

    static async login(email) {
        try {
            const con = db.collection("vendedor");
            const getUser = await con.findOne({ email: email });
            return getUser;
        } catch (error) {
            return error;
        }
    }
}