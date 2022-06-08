module.exports = (sequelize, DataTypes) => {

    const Categorias = sequelize.define("categorias", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Categorias;
}