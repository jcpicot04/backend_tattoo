const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        dialectOptions: {
            ssl: {}
        },
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
        define: {
            timestamps: false
        }
    }
);

sequelize.authenticate()
.then(() => {
    console.log('Conectado..');
})
.catch(err => {
    console.log("Error: " + err);
});

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.tatuadores = require("./tatuadoresModel.js")(sequelize,DataTypes);
db.tatuajes = require("./tatuajesModel.js")(sequelize,DataTypes);
db.categorias = require("./categoriasModel.js")(sequelize,DataTypes);
db.estudios = require("./estudiosModel.js")(sequelize,DataTypes);
db.tatuajes_categorias = require("./tatuajesCategoriasModel.js")(sequelize,DataTypes);

db.sequelize.sync({ force: false})
.then(() => {
    console.log("Re-Sync");
});

module.exports = db