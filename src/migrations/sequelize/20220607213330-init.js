'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('user_sequelize', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.DataTypes.STRING,
      email: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },
      password: Sequelize.DataTypes.STRING,
      profile_image: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      created_at: Sequelize.DataTypes.DATE,
      updated_at: Sequelize.DataTypes.DATE,
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('user_sequelize');
  },
};
