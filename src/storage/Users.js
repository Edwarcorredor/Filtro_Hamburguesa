"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresas = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let Empresas = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _nombre_decorators;
    let _nombre_initializers = [];
    let _direccion_decorators;
    let _direccion_initializers = [];
    let _telefono_decorators;
    let _telefono_initializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _sitio_web_decorators;
    let _sitio_web_initializers = [];
    return _a = class Vendedor {
            constructor(p1 = "hola", p2 = "calle #12", p3, p4, p5) {
                /** @internal
                ** Variables de entrada:
                ** nombre, direccion, telefono, email, sitio_web
                */
                this.nombre = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _nombre_initializers, void 0));
                this.direccion = __runInitializers(this, _direccion_initializers, void 0);
                this.telefono = __runInitializers(this, _telefono_initializers, void 0);
                this.email = __runInitializers(this, _email_initializers, void 0);
                this.sitio_web = __runInitializers(this, _sitio_web_initializers, void 0);
                this.nombre = p1;
                this.direccion = p2;
                this.telefono = p3;
                this.email = p4;
                this.sitio_web = p5;
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _nombre_decorators = [(0, class_transformer_1.Expose)({ name: "NAME" }), (0, class_transformer_1.Transform)(({ value }) => {
                    let data = /^(?=.*[a-zA-Z])[a-zA-Z0-9 ]+$/g.test(value);
                    if (data && typeof value == "string") {
                        return String(value);
                    }
                    else {
                        throw { status: 401, message: "Error en el NAME" };
                    }
                }), (0, class_validator_1.IsDefined)({ message: () => { throw { status: 422, message: "El parametro NAME es obligatorio" }; } })];
            _direccion_decorators = [(0, class_transformer_1.Expose)({ name: "ADDRESS" }), (0, class_transformer_1.Transform)(({ value }) => {
                    let data = /^[a-zA-Z0-9\s.,#-]+$/i.test(value);
                    if (data && typeof value == "string") {
                        return String(value);
                    }
                    else {
                        throw { status: 401, message: "Error en el ADDRESS" };
                    }
                }), (0, class_validator_1.IsDefined)({ message: () => { throw { status: 422, message: "El parametro ADDRESS es obligatorio" }; } })];
            _telefono_decorators = [(0, class_transformer_1.Expose)({ name: "PHONE" }), (0, class_transformer_1.Transform)(({ value }) => {
                    let data = /^(?:[1-9]\d*|undefined)$/g.test(value);
                    if (data) {
                        return String(value);
                    }
                    else {
                        throw { status: 401, message: "Error en el PHONE" };
                    }
                })];
            _email_decorators = [(0, class_transformer_1.Expose)({ name: "EMAIL" }), (0, class_transformer_1.Transform)(({ value }) => {
                    let data = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|undefined+$/g.test(value);
                    if (data) {
                        return String(value);
                    }
                    else {
                        throw { status: 401, message: "Error en el EMAIL" };
                    }
                })];
            _sitio_web_decorators = [(0, class_transformer_1.Expose)({ name: "SITE_WEB" }), (0, class_transformer_1.Transform)(({ value }) => {
                    let data = /^(https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9._%+-]*)*|undefined+$/g.test(value);
                    if (data) {
                        return String(value);
                    }
                    else {
                        throw { status: 401, message: "Error en el EMAIL" };
                    }
                })];
            __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: obj => "nombre" in obj, get: obj => obj.nombre, set: (obj, value) => { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _direccion_decorators, { kind: "field", name: "direccion", static: false, private: false, access: { has: obj => "direccion" in obj, get: obj => obj.direccion, set: (obj, value) => { obj.direccion = value; } }, metadata: _metadata }, _direccion_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _telefono_decorators, { kind: "field", name: "telefono", static: false, private: false, access: { has: obj => "telefono" in obj, get: obj => obj.telefono, set: (obj, value) => { obj.telefono = value; } }, metadata: _metadata }, _telefono_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _sitio_web_decorators, { kind: "field", name: "sitio_web", static: false, private: false, access: { has: obj => "sitio_web" in obj, get: obj => obj.sitio_web, set: (obj, value) => { obj.sitio_web = value; } }, metadata: _metadata }, _sitio_web_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.Empresas = Empresas;
