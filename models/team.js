module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define('Team', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    full_name: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    short_name: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    home_ground: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    logo: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    staff: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    description: {
      type: Sequelize.STRING(500),
      allowNull: true
    }
  }, {
      tableName: 'Team',
      timestamps: true
    })
  return Team;
};
