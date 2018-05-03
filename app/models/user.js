module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nome: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Category);
  };

  return User;
};
