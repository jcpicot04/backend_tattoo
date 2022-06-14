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
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zona: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Tatuajes;
}