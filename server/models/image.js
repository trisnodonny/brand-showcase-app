'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsTo(models.Product, {
        foreignKey:"productId",
        onDelete: "CASCADE"
      })
    }
  }
  Image.init({
    productId: DataTypes.INTEGER,
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: "CASCADE",
      validate: {
        notNull: {
          msg: "Image URL is required"
        },
        notEmpty: {
          msg: "Image URL is required"
        }
      },
    },
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};