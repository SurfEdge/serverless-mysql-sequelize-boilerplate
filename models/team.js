module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define('Team', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    full_name: {
      type: Sequelize.STRING(30),
      allowNull: true,
      defaultValue: null,
    },
    short_name: {
      type: Sequelize.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    home_ground: {
      type: Sequelize.STRING(45),
      allowNull: true,
      defaultValue: null,

    },
    logo: {
      type: Sequelize.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    staff: {
      type: Sequelize.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    description: {
      type: Sequelize.STRING(500),
      allowNull: true,
      defaultValue: null,
    }
  }, {
      tableName: 'Team',
      timestamps: true
    })
  return Team;
};
