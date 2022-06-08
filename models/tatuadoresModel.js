module.exports = (sequelize, DataTypes) => {

    const Tatuadores = sequelize.define("tatuadores", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        instagram: {
            type: DataTypes.STRING,
            allowNull: false
        },
        localizacion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        idestudio: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

    });

    return Tatuadores;
}