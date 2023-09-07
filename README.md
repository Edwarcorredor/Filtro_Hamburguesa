# Cafeteria Campuslands

------

La cafetería de Campuslands proporcionará a los campistas la conveniencia de adquirir hamburguesas, pero se enfrenta a un desafío crítico relacionado con la gestión de ingredientes. La gestión ineficiente de la disponibilidad de ingredientes puede llevar a problemas operativos, como la falta de ingredientes esenciales o el desperdicio de productos no utilizados por parte de los Chefs. Esto se traduce en una experiencia insatisfactoria para los clientes, pérdida de ingresos y un aumento innecesario en los costos operativos.

La falta de un sistema de gestión de inventario eficiente y automatizado dificulta la capacidad de los Chefs para:

1. Satisfacer la demanda de los clientes de manera constante y oportuna.
2. Mantener un seguimiento preciso de los ingredientes y su fecha de vencimiento.
3. Minimizar el desperdicio de ingredientes y costos innecesarios.
4. Tomar decisiones informadas sobre cuándo realizar pedidos de reposición.
5. Garantizar una experiencia de cliente consistente y de alta calidad en sus platos.

En resumen, los Chefs se enfrentan a un problema crítico de gestión de ingredientes que afecta su capacidad para operar eficientemente y brindar un servicio de calidad. Para abordar este problema, es necesario desarrollar un sistema de gestión de inventario efectivo que permita un control en tiempo real del stock de ingredientes y una planificación de pedidos más precisa.

## *Instalación*

Para instalar y utilizar este proyecto, siga los siguientes pasos:

1. Asegúrese de tener [Node.js](https://nodejs.org/) instalado en su sistema.

2. Clone este repositorio en su máquina local utilizando el siguiente comando.

   ```
   git clone https://github.com/Edwarcorredor/Filtro_Hamburguesa.git
   ```

3. Abra el terminal en la carpeta raiz del repositorio e instale las siguientes dependencias.

   ```
   npm i -E bcrypt class-transformer class-validator dotenv express express-acl express-rate-limit express-routes-versioning express-validator jose mongodb passport passport-http-bearer reflect-metadata typescript
   ```

   ```
   npm i -E -D nodemon
   ```

4. En el archivo .env del proyecto configurar las variables de entorno de acuerdo a su usuario y acceso a base de datos.

   ```
   MY_SERVER = { "hostname": "127.10.10.10", "port":5020}
   
   ATLAS_PASSWORD ="password"
   
   ATLAS_USER="user"
   
   ATLAS_DB="Db"
   
   JWT_SECRET= 1234567
   ```

------

## Ejecución

Para poner en marcha el proyecto, sigue estos pasos:

1. Abre dos terminales.
2. En la primera terminal, ejecuta el siguiente comando para iniciar el servidor:

```bash
npm run dev
```

3. En la segunda terminal, utiliza el siguiente comando para compilar el código TypeScript:

```bash
npm run tsc
```

## Creación vendedores

Para la creación del vendedor debe realizar una petición POST al siguiente endpoint

```
POST
http://127.10.10.10:5020/vendedores/crear

content-type: application/json

{
  "nombre_vendedor": "nombre",
  "rol_vendedor": "admin",
  "password_vendedor": "contraseña",
  "email_vendedor": "email@example"
}
```

Actualmente el único rol existente es admin, importante ingresar unicamente este rol debido a que es el unico que tiene permisos para ejecutar cualquier endpoint

## Login de vendedores

Para realizar el login debe realizar una petición POST al siguiente endpoint

```
POST
http://127.10.10.10:5020/auth/vendedores

content-type: application/json

{
  "password": "contraseña",
  "email": "email@example"
}
```

Si el ingreso es exitoso, se generará un token el cual le permitirá acceder a los diferentes endpoints disponibles

Para realizar peticiones puede utilizar la extension de Visual Studio Code llamada ThunderCliente, debe estar configurada de la siguiente manera para que el funcionamiento sea correcto


<img width="350" alt="conexionthunder" src="https://github.com/Edwarcorredor/Rappi_Campus/assets/104398132/f1c068ce-018f-430d-aea7-f273a1551388">


# MongoDB

```js
use("filtroHamburguesa_EdwarCorredor");

db.createCollection("ingrediente", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "_id", 
          "descripcion", 
          "fecha_vencimiento", 
          "precio_unitario", 
          "stock" ],
          properties: {
            _id: {
                bsonType: "int",
                description: "Identificador del ingrediente"
            },
            descripcion: {
                bsonType: "string",
                description: "Descripción del ingrediente"
            },
            fecha_vencimiento: {
                bsonType: "date",
                description: "Fecha de vencimiento del ingrediente"
            },
            precio_unitario: {
                bsonType: "number",
                description: "Precio unitario del ingrediente"
            },
            stock: {
                bsonType: "int",
                description: "Cantidad actual del ingrediente"
            }
          }
       }
    }
});
use("filtroHamburguesa_EdwarCorredor");
db.ingrediente.insertMany([{_id:3, descripcion: "Pan", fecha_vencimiento: new ISODate('2023-05-01'), precio_unitario: 1000, stock: 0 },
{_id:4, descripcion: "Carne", fecha_vencimiento: new ISODate('2023-10-02'), precio_unitario: 2000, stock: 0 }
])

db.createCollection("hamburguesa",{
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "_id", 
          "nombre", 
          "categoria", 
          "ingredientes", 
          "chef",
          "precio"],
          properties: {
            _id: {
                bsonType: "int",
                description: "Identificador de la hamburguesa"
            },
            nombre: {
                bsonType: "string",
                description: "Nombre de la hamburguesa"
            },
            categoria: {
                bsonType: "string",
                description: "Categoria de la hamburguesa"
            },
            ingredientes: {
                bsonType: "array",
                items: {
                    bsonType:"string",
                    description: "Ingrediente de la hamburguesa"
                }
            },
            chef: {
                bsonType: "string",
                description: "Nombre del chef"
            },
            precio:{
                bsonType: "int",
                description: "Precio de la hamburguesa"
            }
          }
       }
    }
});

use("filtroHamburguesa_EdwarCorredor");
db.hamburguesa.insertMany([{_id: 1, nombre: "Clásica", categoria: "Carne", ingredientes: ["Pan integral", "Carne"], chef: "ChefB", precio: 1000},
{_id: 2, nombre: "Vegetales", categoria: "Vegetariana", ingredientes: ["Pan integral", "Lentejas"], chef: "ChefB", precio: 1000}
])


db.createCollection("chef",{
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "_id", 
          "nombre", 
          "especialidad"],
          properties: {
            _id: {
                bsonType: "int",
                description: "Identificador del chef"
            },
            nombre: {
                bsonType: "string",
                description: "Nombre del chef"
            },
            especialidad: {
                bsonType: "string",
                description: "Especialidad del chef"
            }
          }
       }
    }
});

db.chef.insertMany([{_id:1, nombre: "ChefC", especialidad: "Carnes"}, {_id:2, nombre: "Danilo", especialidad:"Cocina internacional"}]);


db.createCollection("categoria",{
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "_id", 
          "nombre", 
          "descripcion"],
          properties: {
            _id: {
                bsonType: "int",
                description: "Identificador de la categoria"
            },
            nombre: {
                bsonType: "string",
                description: "Nombre de la categoria"
            },
            descripcion: {
                bsonType: "string",
                description: "Descripcion de la categoria"
            }
          }
       }
    }
});

db.categoria.insertMany([{_id:1, nombre:"Gourmet", descripcion:"Gourmet muy rica"},{_id:2, nombre:"Vegetariana", descripcion:"Muy vegetal"}]);

db.createCollection("vendedor", {
    validator:{
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "nombre", "email", "password", "rol"],
            properties:{
                _id: {
                    bsonType: "int",
                    description: "Identificador del vendedor"
                },
                nombre: {
                    bsonType: "string",
                    description: "Nombre del vendedor"
                },
                email: {
                    bsonType: "string",
                    description: "Email del vendedor"
                },
                password: {
                    bsonType: "string",
                    description: "Password del vendedor"
                },
                rol: {
                    bsonType: "string",
                    description: "Rol del vendedor"
                }

            }

        }
    }
})
```

------

# Consultas

1. Encontrar todos los ingredientes con stock menor a 400

   ```
   GET
   http://127.10.10.10:5020/ingredientes/stockmenor
   ```

2. Encontrar todas las hamburguesas de la categoría "Vegetariana"

   ```
   GET
   http://127.10.10.10:5020/hamburguesas/vegetariana
   ```

3. Encontrar todos los chefs que se especializan en "Carnes"

   ```
   GET
   http://127.10.10.10:5020/chefs/carnes
   ```

4. Aumentar en 1.5 el precio de todos los ingredientes

   ```
   PUT
   http://127.10.10.10:5020/ingredientes/aumentar
   ```

5. Encontrar todas las hamburguesas preparadas por "ChefB"

   ```
   GET
   http://127.10.10.10:5020/hamburguesas/chefb
   ```

6. Encontrar el nombre y la descripción de todas las categorías

   ```
   GET
   http://127.10.10.10:5020/categorias/todas
   ```

7. Eliminar todos los ingredientes que tengan un stock de 0

   ```
   DELETE
   http://127.10.10.10:5020/ingredientes/sinstock
   ```

8. Agregar un nuevo ingrediente a la hamburguesa "Clásica"

   ```
   PUT
   http://127.10.10.10:5020/hamburguesas/agregar
   
   content-type: application.json
   {
   	ingrediente_hamburguesa: "ingrediente_nuevo"
   }
   ```

9. Encontrar todas las hamburguesas que contienen "Pan integral" como ingrediente

   ```
   GET
   http://127.10.10.10:5020/hamburguesas/pan
   ```

10. Cambiar la especialidad del "ChefC" a "Cocina Internacional"

    ```
    PUT
    http://127.10.10.10:5020/chefs/chefc
    ```

11. Encontrar el ingrediente más caro

12. Encontrar las hamburguesas que no contienen "Queso cheddar" como ingrediente

13. Incrementar el stock de "Pan" en 100 unidades

14. Encontrar todos los ingredientes que tienen una descripción que contiene la palabra "clásico"

15. Listar las hamburguesas cuyo precio es menor o igual a $9

16. Contar cuántos chefs hay en la base de datos

17. Encontrar todas las categorías que contienen la palabra "gourmet" en su descripción

18. Eliminar las hamburguesas que contienen menos de 5 ingredientes

19. Agregar un nuevo chef a la colección con una especialidad en "Cocina Asiática"

20. Listar las hamburguesas en orden ascendente según su precio

21. Encontrar todos los ingredientes cuyo precio sea entre $2 y $5

22. Actualizar la descripción del "Pan" a "Pan fresco y crujiente"

23. Encontrar todas las hamburguesas que contienen "Tomate" o "Lechuga" como ingredientes

24. Listar todos los chefs excepto "ChefA"

25. Incrementar en $2 el precio de todas las hamburguesas de la categoría "Gourmet"

26. Listar todos los ingredientes en orden alfabético

27. Encontrar la hamburguesa más cara

28. Agregar "Pepinillos" a todas las hamburguesas de la categoría "Clásica"

29. Eliminar todos los chefs que tienen una especialidad en "Cocina Vegetariana"

30. Encontrar todas las hamburguesas que contienen exactamente 7 ingredientes

31. Encontrar la hamburguesa más cara que fue preparada por un chef especializado en "Gourmet"

32. Listar todos los ingredientes junto con el número de hamburguesas que los contienen

33. Listar los chefs junto con el número de hamburguesas que han preparado

34. Encuentra la categoría con la mayor cantidad de hamburguesas

35. Listar todos los chefs y el costo total de ingredientes de todas las hamburguesas que han preparado

36. Encontrar todos los ingredientes que no están en ninguna hamburguesa

37. Listar todas las hamburguesas con su descripción de categoría

38. Encuentra el chef que ha preparado hamburguesas con el mayor número de ingredientes en total

39. Encontrar el precio promedio de las hamburguesas en cada categoría

40. Listar los chefs y la hamburguesa más cara que han preparado

------
# Respuestas
