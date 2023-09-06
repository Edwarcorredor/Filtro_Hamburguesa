import { Transform, Expose } from "class-transformer";
import { IsDefined} from 'class-validator';


export class Vendedor{


    @Expose({name: "nombre_vendedor"})
    @Transform(({value}) => {
        let data = /^(?=.*[a-zA-Z])[a-zA-Z0-9 ]+$/g.test(value);

        if ( data && typeof value == "string"){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el nombre_vendedor"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro Nombre_vendedor es obligatorio"}}})
    nombre: string

    @Expose({name: "email_vendedor"})
    @Transform(({value}) => {
        let data = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|undefined+$/g.test(value);
        if (data){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el email_vendedor"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro email_vendedor es obligatorio"}}})
    email: string

    @Expose({name: "password_vendedor"})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro password_vendedor es obligatorio"}}})
    password: string

    @Expose({name: "rol_vendedor"})
    @Transform(({value}) => {
        let data = /^(?=.*[a-zA-Z])[a-zA-Z0-9 ]+$/g.test(value);

        if ( data && typeof value == "string"){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el rol_vendedor"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro rol_vendedor es obligatorio"}}})
    rol: string

/*
    @Expose({name: "PHONE"})
    @Transform(({value}) => {
        let data = /^(?:[1-9]\d*|undefined)$/g.test(value);
        if (data){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el PHONE"};
        }    
    })
    telefono: string*/
    
    

    constructor(p1:string, p2:string, p3:string, p4:string){
        this.nombre = p1;
        this.email = p2;
        this.password = p3;
        this.rol = p4;
    }
}