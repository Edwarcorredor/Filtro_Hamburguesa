import {validate} from 'class-validator';
import 'reflect-metadata';
import {plainToInstance} from 'class-transformer';
import {Vendedor} from '../controller/Users.js'
import {Hamburguesa} from '../controller/Hamburguesa.js'

const colecciones = {
   /* "ingredientes" : Ingrediente,
    
    "chefs" : Chef,
    "categorias" : Categoria,*/
    "hamburguesas" : Hamburguesa,
    "vendedores": Vendedor

}

const  middlewareDTO = async(req,res,next)=>{

    try {
        let data = plainToInstance(colecciones[req.baseUrl.split('/')[1]], req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
}

export default middlewareDTO;