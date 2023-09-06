var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from "class-transformer";
import { IsDefined } from 'class-validator';
export class Vendedor {
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
    constructor(p1, p2, p3) {
        this.nombre = p1;
        this.email = p2;
        this.password = p3;
    }
}
__decorate([
    Expose({ name: "nombre_vendedor" }),
    Transform(({ value }) => {
        let data = /^(?=.*[a-zA-Z])[a-zA-Z0-9 ]+$/g.test(value);
        if (data && typeof value == "string") {
            return String(value);
        }
        else {
            throw { status: 401, message: "Error en el nombre_vendedor" };
        }
    }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro Nombre_vendedor es obligatorio" }; } }),
    __metadata("design:type", String)
], Vendedor.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "email_vendedor" }),
    Transform(({ value }) => {
        let data = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|undefined+$/g.test(value);
        if (data) {
            return String(value);
        }
        else {
            throw { status: 401, message: "Error en el email_vendedor" };
        }
    }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro email_vendedor es obligatorio" }; } }),
    __metadata("design:type", String)
], Vendedor.prototype, "email", void 0);
__decorate([
    Expose({ name: "password_vendedor" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro password_vendedor es obligatorio" }; } }),
    __metadata("design:type", String)
], Vendedor.prototype, "password", void 0);
