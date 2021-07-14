module.exports = (sequelize, DataTypes)=> {

    const users = sequelize.define('users', {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      desgination: {
        type: DataTypes.STRING
      },
      empId: {
        type: DataTypes.INTEGER
      }
    }, {
      classMethods: {
  
          },
      // Other model options go here
      sequelize,
      modelName: 'users',
      freezeTableName: true
    });
  
    return users;
  }
  