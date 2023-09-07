import { Transform, Expose } from "class-transformer";
import { IsDefined} from 'class-validator';


export class Hamburguesa{


    @Expose({name: "ingrediente_hamburguesa"})
    @Transform(({value}) => {
        let data = /^(?=.*[a-zA-Z])[a-zA-Z ]+$/g.test(value);

        if ( data && typeof value == "string"){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el ingrediente_hamburguesa"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro ingrediente_hamburguesa es obligatorio"}}})
    ingrediente: string


    constructor(p1:string){
        this.ingrediente = p1;

    }
}