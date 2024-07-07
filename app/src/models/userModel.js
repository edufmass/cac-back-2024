const { DataTypes, Model } = require ("sequelize");
const db = require("./../database/db");
const bcrypt = require('bcrypt');

class User extends Model {

}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        set (value) {
            this.setDataValue('email', value?.trim())
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { args: true, msg: 'password can\'t be empty' },           
            min: { args: 5, msg: 'password length must be more than 5 characters' },
        },
        set (value) {
            this.setDataValue('password', value ? bcrypt.hashSync(value, 12) : null)
        }
    },
    role: {
        type: DataTypes.STRING
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    }
},
{
    sequelize: db,
    tableName: 'users',
    modelName: 'user',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = User;