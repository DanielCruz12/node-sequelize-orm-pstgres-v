import { DataTypes } from 'sequelize'
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../database/dataBase';

export const User = sequelize.define('users', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
  },
  userType: {
    type: DataTypes.ENUM('0', '1', '2'),
    allowNull: false,
    validate: {
      notNull: {
        msg: 'firstName cannot be null',
      },
      notEmpty: {
        msg: 'firstName cannot be empty',
      },
    },
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'firstName cannot be null',
      },
      notEmpty: {
        msg: 'firstName cannot be empty',
      },
    },
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'lastName cannot be null',
      },
      notEmpty: {
        msg: 'lastName cannot be empty',
      },
    },
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'email cannot be null',
      },
      notEmpty: {
        msg: 'email cannot be empty',
      },
      isEmail: {
        msg: 'Invalid email id',
      },
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'password cannot be null',
      },
      notEmpty: {
        msg: 'password cannot be empty',
      },
    },
  },

}, {
  paranoid: true,
  freezeTableName: true,
  modelName: 'user',
})