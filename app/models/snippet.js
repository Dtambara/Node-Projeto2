module.exports = (sequelize, DataTypes) => {
  const Snnippet = sequelize.define('Snnippet', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  });

  Snnippet.associate = (models) => {
    Snnippet.belongsTo(models.Category);
  };

  return Snnippet;
};
