module.exports = (sequelize, DataTypes) => {

const TatuajesCategorias = sequelize.define("tatuajes_categorias", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idtatuaje: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idcategoria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

    return TatuajesCategorias;
}