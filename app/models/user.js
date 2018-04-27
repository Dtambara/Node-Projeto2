module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nome: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};
