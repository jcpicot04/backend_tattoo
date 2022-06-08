module.exports = (sequelize, DataTypes) => {

    const Tatuajes = sequelize.define("tatuajes", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idtatuador: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idcategoria: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Tatuajes;
}