const express = require("express");
const mysql = require('mysql2');
const morgan = require("morgan");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require('cors');

require('dotenv').config();


// const corOptions = {
//     origin: {'http://localhost:3000',"https://tatuate.herokuapp.com/"}
// };

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API',
            description: 'API para Tatuate',
            contact: {
                name: 'Juan Carlos Picot Juan'
            },
            servers: ["http://localhost:3000","https://tatuate.herokuapp.com/"]
        }
    },
    apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// app.use(cors(corOptions));
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//DB
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect(error => {
    if(error) throw error;
    console.log('Database running'); 
});
connection.end();

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/tatuadores", require("./routes/tatuadoresRoute"));
app.use("/tatuajes", require("./routes/tatuajesRoute"));
app.use("/categorias", require("./routes/categoriasRoute"));
app.use("/estudios", require("./routes/estudiosRoute"));

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port", 3000);
});

//Base
app.get("/", (req,res) => {
    res.send("API TATUATE");
});