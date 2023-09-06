import {validate} from 'class-validator';
import 'reflect-metadata';
import {plainToInstance} from 'class-transformer';
import {Vendedor} from '../controller/Users.js'

const colecciones = {
   /* "ingredientes" : Ingrediente,
    "hamburguesas" : Hamburguesa,
    "chefs" : Chef,
    "categorias" : Categoria,*/
    "vendedores": Vendedor

}

const  middlewareDTO = async(req,res,next)=>{

    try {
        let data = plainToInstance(colecciones[req.baseUrl.split('/')[1]], req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        console.log(req.body);
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
}

export default middlewareDTO;