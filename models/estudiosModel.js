module.exports = (sequelize, DataTypes) => {

    const Estudios = sequelize.define("estudios", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        latitud: {
            type: DataTypes.STRING,
            allowNull: false
        },
        longitud: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Estudios;
}