# Ejercicio de Frontend / Backend MERN

## Ejercicio técnico realizado para una empresa de tecnología como parte de un proceso de selección de Desarrollador Full Stack Javascript.

### Deploy: https://ejercicio-mern-front-back.vercel.app/

### Descripción:

Crear 2 proyectos 1 llamado “Front” y otro llamado “Back”. El proyecto de Front será creado con React, mientras que en el Proyecto de Back deberá ser creado con Express de Node, el cual brindara una API REST JSON.

1. Login el cual debe consumir un servicio de login que debe ser creado en el proyecto de Back.
2. Listar [post], el cual debe consumir a la API : https://jsonplaceholder.typicode.com/posts y mostrarlo en una lista o tabla.
3. Listar [photos], el cual debe consumir a la API : https://jsonplaceholder.typicode.com/photos, esta lista debe tener paginación de 10 en 10, haciendo uso de limit and offset.

Todos los llamados a api deben ser a través del back, no directamente desde las url solicitadas. Hacer uso de JWT para el proceso de autenticación.

<b>Agregado personal:</b>

-   Agregar un proceso en el cual el usuario pueda registrarse en el sistema.

<hr>

### Características

-   Se utiliza el patrón de diseño Modelo - Controlador (la Vista está por separado hecha en React) junto al uso de Servicios y Repositorios.
-   Motor de base de datos no relacionales: MongoDB.
-   Cuenta con validaciones de datos ingresados tanto en frontend como en backend.
-   Encriptación de contraseña al crear un usuario y verificación de la contraseña ingresada con la real.
-   Generación de token con una palabra secreta a elección.
-   Verificación de token enviado por Header.
-   Sesión mantenida durante una hora. Al reingresar a algún sitio se verifica si hay alguna cookie que pertenezca al sitio y además recupera los datos del usuario.
-   La contraseña y el ID se mantienen en el servidor.
-   En caso de ir a una página incorrecta se muestra un mensaje 404 personalizado (ver Screenshots al final) y cuando falla el servidor se muestra un mensaje 500 también personalizado.
-   Siempre se verifica la existencia de cookie con el token y se actuará al respecto. Si existe se podrá ver Posts y Photos pero no Index ni Registrar, y si no existe no se podrá acceder a Posts y Photos debiendose registrar o iniciar sesión.

<hr>

### Tecnologías aplicadas en este caso particular:

<b>Frontend:</b>

<div>
    <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
    <img alt="Redux" src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"/>
</div>

-   ReactJS (librería base del proyecto)
-   Bulma (framework CSS)
-   Redux (manejo de estados globales)
-   React Router (routing)
-   React Cookie (manejo de cookies)
-   Axios (peticiones externas)
-   React Hook Form (formulario de inicio de sesión)
-   Yup (validación de datos ingresados en frontend)

<b>Backend:</b>

<div>
    <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
    <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
    <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
</div>

-   NodeJS (entorno de ejecución principal)
-   Express (ruteo y manejo de peticiones)
-   Nodemon (monitoreo de cambios en el código)
-   Axios (peticiones externas)
-   CORS (habilitación de peticiones hechas desde un sitio externo)
-   Dotenv (uso de variables de entorno)
-   JSON Web Tokens (creación y administración de tokens)
-   Mongoose (ORM para usar MongoDB, ver más adelante)
-   Bcrypt (encriptado de contraseña)
-   Express Validator (validación de datos ingresados en backend)

<hr>

### Consideraciones:

-   Inicialmente se desarrolló con Next porque me resolvía cosas de ruteo y la forma de entregar el sitio. Tuve problemas al querer hacer cambios o diversas acciones y decidí no usar Next sino volver a usar React puro junto con React Router para routing. La versión de Next se encuentra en la carpeta 'old_front'.
-   En el feedback hecho por la empresa se corrigieron varios puntos:
    -   Se utilizó MySQL y se debería haber usado MongoDB. Este punto no fue aclarado en el ejercicio original y opté por usar MySQL ya que considero que se acostumbra a guardar información vinculada a usuarios en bases de datos relacionales ya que después se relacionará con otras actividades que realizará el mismo. Por eso en principio se utilizó Sequelize y en el cambio de motor de base de datos a MongoDB se usa Mongoose.
    -   Encriptación de contraseña. Al no haber un punto específico respecto al registro de datos se optó por no recurrir a la encriptación. Con el agregado de la funcionalidad de registro se utiliza Bcrypt.
    -   Validación de datos del lado del servidor. No lo consideré necesario por los fines del ejercicio y por los tiempos brindados. Fue agregado.

<hr>

### Comandos a ejecutar

#### Frontend:

1. Mover a carpeta Frontend:

    <code>cd front</code>

2. Instalar dependencias:

    <code>npm install</code>

3. Modo desarrollador:

    <code>npm run dev</code>

    Modo producción:

    <code>npm run build</code>

4. Crear un usuario para poder ingresar al sitio. Una vez creado se debe loguear.

#### Backend:

1. Mover a carpeta Backend:

    <code>cd back</code>

2. Instalar dependencias:

    <code>npm install</code>

3. Modo desarrollador:

    <code>npm run dev</code>

    <small>Nota: En caso de problemas de ejecución, intente con <code>npm run dev:alt</code></small>

    Modo producción:

    <code>npm start</code>

    <small>Nota: En caso de problemas de ejecución, intente con <code>npm run start:alt</code></small>

4. Crear .env de acuerdo a las variables de ejemplo en .env.example

    PORT= Puerto del servidor de NodeJS

    DB_URI= URL provista por Atlas o mongodb://localhost:27017/[nombreTabla] o el correspondiente a su base de datos local.

    JWT_SECRET= palabra clave secreta para realizar el token.

    SALT= Cantidad de salt para encriptar la contraseña.

<hr>

### Screenshots

Home:

<img src='./screenshots/home.png' />

Posts:

<img src='./screenshots/posts.png' />

Photos:

<img src='./screenshots/photos.png' />

Error 404:

<img src='./screenshots/404.png' />

<hr>

![GitHub](https://img.shields.io/github/license/matiasal55/ejercicio-front-back?style=for-the-badge)
