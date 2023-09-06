import express from "express";
import dotenv from "dotenv";
import loginRouter from "./routes/loginRouter.js";
import userRouter from "./routes/userRouter.js";
import passportConfig from "./helpers/passportHelpert.js"
import ingredienteRouter from "./routes/ingredienteRouter.js";
import hamburguesaRouter from "./routes/hamburguesaRouter.js";
import chefRouter from "./routes/chefRouter.js";

//import acl from "express-acl";
dotenv.config();

/*
acl.config({
  filename: 'nacl.json',
  baseUrl: 'tienda',
  roleSearchPath: 'user.rol',
  denyCallback: (res) => res.status(403).json({
    message: 'No tienes permisos para acceder a este recurso'
  })
});*/

const app = express();
app.use(express.json());

app.use('/auth', loginRouter)
app.use('/vendedores', userRouter)
app.use(passportConfig.initialize())
app.use(passportConfig.authenticate('bearer', { session: false }))
app.use('/ingredientes', ingredienteRouter)
app.use('/hamburguesas', hamburguesaRouter )
app.use('/chefs', chefRouter )


/*
app.get('/api/admin', passport.authenticate('bearer', { session: false }), acl.authorize, (req, res) => {
  res.json({mensaje: 'Hola admin', usuario: req.user});
});
app.get('/api/vendedor', passport.authenticate('bearer', { session: false }), acl.authorize, (req, res) => {
  res.json({mensaje: 'Hola vendedor', usuario: req.user});
});
*/

let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
  console.log(`Server is running on http:${config.hostname}:${config.port}`);
});