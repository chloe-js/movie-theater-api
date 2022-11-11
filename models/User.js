//import our db, Model, DataTypes
// const { DataTypes, Model } = require("sequelize");
const { db, DataTypes, Model} = require('../db')

class User extends Model {}


//Creating a User child class from the Model parent class

User.init(
    {

        username: DataTypes.STRING,
        password: DataTypes.STRING

    },
    {
        sequelize: db,
        modelName: "User",
    }
);

//   const User = db.define("users", {
//     username: DataTypes.STRING,
//     password: DataTypes.STRING
// });

//exports
module.exports = { User }